'use strict';

const chai = require('chai');
const sinon = require('sinon');
const moment = require('moment');
const fixture = require('./create.fixture');
const { campaigns } = require('../../src/functions');
const { campaignRepository } = require('../../src/repositories');

chai.should();

let campaignPutStub = null;

describe('Testing src/functions/create.js script.', () => {

    beforeEach(() => {
        campaignPutStub = sinon.stub(campaignRepository, 'putItem');
    });

    afterEach(() => {
        campaignPutStub.restore();
    });

    describe('Testing handler method.', () => {

        it('Should fail when parameter `name` is missing.', async () => {

            const body = Object.assign({}, fixture.request, { name: undefined });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"name" is required'
            });
        });

        it('Should fail when parameter `name` is invalid (non-string).', async () => {

            const body = Object.assign({}, fixture.request, { name: 123 });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"name" must be a string'
            });
        });

        it('Should fail when parameter `name` has length lesser than 3.', async () => {

            const body = Object.assign({}, fixture.request, { name: 'ab' });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"name" length must be at least 3 characters long'
            });
        });

        it('Should fail when parameter `name` has length greater than 3.', async () => {

            const body = Object.assign({}, fixture.request, { name: 'ab' });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"name" length must be at least 3 characters long'
            });
        });
        
        it('Should fail when parameter `name` has length greater than 30.', async () => {

            const body = Object.assign({}, fixture.request, { name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"name" length must be less than or equal to 30 characters long'
            });
        });

        it('Should fail when parameter `userId` is missing.', async () => {

            const body = Object.assign({}, fixture.request, { userId: undefined });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"userId" is required'
            });
        });

        it('Should fail when parameter `userId` is invalid (non-numeric).', async () => {

            const body = Object.assign({}, fixture.request, { userId: 'abc' });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"userId" must be a number'
            });
        });

        it('Should fail when parameter `scheduledTo` is missing.', async () => {

            const body = Object.assign({}, fixture.request, { scheduledTo: undefined });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"scheduledTo" is required'
            });
        });

        it('Should fail when parameter `scheduledTo` is invalid (non-date).', async () => {

            const body = Object.assign({}, fixture.request, { scheduledTo: [] });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"scheduledTo" must be a string with one of the following formats [DD/MM/YYYY]'
            });
        });

        it('Should fail when parameter `scheduledTo` is lesser than now.', async () => {

            const yesterday = moment().add(-1, 'days').format('DD/MM/YYYY');
            const body = Object.assign({}, fixture.request, { scheduledTo: yesterday });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: `"scheduledTo" must be greater than "${Date()}"`
            });
        });

        it('Should fail when parameter `sendTo` is missing.', async () => {

            const body = Object.assign({}, fixture.request, { sendTo: undefined });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"sendTo" is required'
            });
        });

        it('Should fail when parameter `sendTo` is invalid (non-string).', async () => {

            const body = Object.assign({}, fixture.request, { sendTo: 123 });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"sendTo" must be a string'
            });
        });

        it('Should fail when parameter `sendTo` has length lesser than 3.', async () => {

            const body = Object.assign({}, fixture.request, { sendTo: 'ab' });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"sendTo" length must be at least 3 characters long'
            });
        });

        it('Should fail when parameter `sendTo` has length greater than 20.', async () => {

            const body = Object.assign({}, fixture.request, { sendTo: 'aaaaaaaaaaaaaaaaaaaaa' });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"sendTo" length must be less than or equal to 20 characters long'
            });
        });

        it('Should fail when parameter `content` is missing.', async () => {

            const body = Object.assign({}, fixture.request, { content: undefined });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"content" is required'
            });
        });

        it('Should fail when parameter `content` is invalid (non-string).', async () => {

            const body = Object.assign({}, fixture.request, { content: 123 });
            const response = await campaigns.create.handler({ body: JSON.stringify(body) });

            response.statusCode.should.be.equal(422);
            response.body.should.be.deep.equal({
                error: 'invalid_parameter',
                description: '"content" must be a string'
            });
        });

        it('Should fail when an unexpected error occurs.', async () => {

            campaignPutStub.throws('Unexpected error');
            const response = await campaigns.create.handler({ body: JSON.stringify(fixture.request) });
            response.statusCode.should.be.equal(500);
        });

        it('Should create a campaign successfully and returning the desired values.', async () => {

            campaignPutStub.resolves(fixture.response);
            const response = await campaigns.create.handler({ body: JSON.stringify(fixture.request) });
            
            response.statusCode.should.be.equal(201);
            response.body.should.have.keys('name', 'userId', 
                'createdAt', 'scheduledTo', 'sendTo', 'content');
        });
    });
});