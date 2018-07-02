'use strict';

const chai = require('chai');
const sinon = require('sinon');
const fixture = require('./search.fixture');
const { campaigns } = require('../../src/functions');
const { campaignRepository } = require('../../src/repositories');

chai.should();

let campaignQueryStub = null;

describe('Testing src/functions/search-by-user.js script.', () => {

    beforeEach(() => {
        campaignQueryStub = sinon.stub(campaignRepository, 'query');
    });

    afterEach(() => {
        campaignQueryStub.restore();
    });

    describe('Testing handler method.', () => {

        it('Should fail when parameter `userId` is missing.', async () => {

            const response = await campaigns.searchByUser.handler({
                pathParameters: { userId: undefined }
            });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"userId" is required'
            });
        });

        it('Should fail when parameter `userId` is invalid (non-numeric).', async () => {

            const response = await campaigns.searchByUser.handler({
                pathParameters: { userId: 'abc' }
            });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"userId" must be a number'
            });
        });

        it('Should fail when an unexpected error occurs.', async () => {

            campaignQueryStub.throws('Unexpected error');

            const response = await campaigns.searchByUser.handler({
                pathParameters: fixture.requestSearch
            });
            response.statusCode.should.be.equal(500);
        });

        it('Should search campaigns by a given user successfully.', async () => {

            const campaignsByGivenUser = fixture.responseSearch.Items.filter(
                item => item.userId === fixture.requestSearch.userId
            );
            
            campaignQueryStub.resolves(campaignsByGivenUser);

            const response = await campaigns.searchByUser.handler({
                pathParameters: fixture.requestSearch
            });

            response.statusCode.should.be.equal(200);
            response.body.should.be.deep.equal(campaignsByGivenUser);
        });
    });

});