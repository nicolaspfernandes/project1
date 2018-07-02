'use strict';

const chai = require('chai');
const sinon = require('sinon');
const fixture = require('./search.fixture');
const { campaigns } = require('../../src/functions');
const { campaignRepository } = require('../../src/repositories');

chai.should();

let campaignScanStub = null;

describe('Testing src/functions/search.js script.', () => {

    beforeEach(() => {
        campaignScanStub = sinon.stub(campaignRepository, 'scan');
    });

    afterEach(() => {
        campaignScanStub.restore();
    });

    describe('Testing handler method.', () => {

        it('Should fail when an unexpected error occurs.', async () => {

            campaignScanStub.throws('Unexpected error');
            const response = await campaigns.search.handler();
            response.statusCode.should.be.equal(500);
        });

        it('Should search campaigns without any criteria successfully.', async () => {

            campaignScanStub.resolves(fixture.responseSearch.Items);
            const response = await campaigns.search.handler();

            response.statusCode.should.be.equal(200);
            response.body.should.be.deep.equal(fixture.responseSearch.Items);
        });
    });
});