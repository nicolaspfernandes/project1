'use strict';

const chai = require('chai');
const sinon = require('sinon');
const moment = require('moment');
const fixture = require('./campaign-service.fixture');
const { campaignService } = require('../../src/services');
const { client } = require('../../src/infrastructure/dynamodb');

chai.should();

let clientPutStub = null;

describe('Testing src/services/campaign-service.js file.', () => {

    beforeEach(() => {
        clientPutStub = sinon.stub(client, 'put');
    });

    afterEach(() => {
        clientPutStub.restore();
    });

    describe('Testing `createCampaign` method.', () => {

        it('Should fail when parameter `name` is missing.', async () => {

            try {
                const data = Object.assign({}, fixture.request, { name: undefined });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"name" is required'
                });
            }
        });

        it('Should fail when parameter `name` is invalid (non-string).', async () => {

            try {
                const data = Object.assign({}, fixture.request, { name: 123 });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"name" must be a string'
                });
            }
        });

        it('Should fail when parameter `name` has length lesser than 3.', async () => {

            try {
                const data = Object.assign({}, fixture.request, { name: 'ab' });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"name" length must be at least 3 characters long'
                });
            }
        });

        it('Should fail when parameter `name` has length greater than 30.', async () => {

            try {
                const data = Object.assign({}, fixture.request, { 
                    name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' 
                });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"name" length must be less than or equal to 30 characters long'
                });
            }
        });

        it('Should fail when parameter `userId` is missing.', async () => {

            try {
                const data = Object.assign({}, fixture.request, { userId: undefined });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"userId" is required'
                });
            }
        });

        it('Should fail when parameter `userId` is invalid (non-numeric).', async () => {

            try {
                const data = Object.assign({}, fixture.request, { userId: 'abc' });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"userId" must be a number'
                });
            }
        });

        it('Should fail when parameter `scheduledTo` is missing.', async () => {

            try {
                const data = Object.assign({}, fixture.request, { scheduledTo: undefined });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"scheduledTo" is required'
                });
            }
        });

        it('Should fail when parameter `scheduledTo` is invalid (non-date).', async () => {

            try {
                const data = Object.assign({}, fixture.request, { scheduledTo: [] });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"scheduledTo" must be a string with one of the following formats [DD/MM/YYYY]'
                });
            }
        });

        it('Should fail when parameter `scheduledTo` is lesser than now.', async () => {

            try {
                
                const yesterday = moment().add(-1, 'days').format('DD/MM/YYYY');
                const data = Object.assign({}, fixture.request, { scheduledTo: yesterday });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: `"scheduledTo" must be greater than "${Date()}"`
                });
            }
        });

        it('Should fail when parameter `sendTo` is missing.', async () => {

            try {
                const data = Object.assign({}, fixture.request, { sendTo: undefined });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"sendTo" is required'
                });
            }
        });

        it('Should fail when parameter `sendTo` is invalid (non-string).', async () => {

            try {
                const data = Object.assign({}, fixture.request, { sendTo: 123 });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"sendTo" must be a string'
                });
            }
        });

        it('Should fail when parameter `sendTo` has length lesser than 3.', async () => {

            try {
                const data = Object.assign({}, fixture.request, { sendTo: 'ab' });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"sendTo" length must be at least 3 characters long'
                });
            }
        });

        it('Should fail when parameter `sendTo` has length greater than 20.', async () => {

            try {
                const data = Object.assign({}, fixture.request, { 
                    sendTo: 'aaaaaaaaaaaaaaaaaaaaa' 
                });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"sendTo" length must be less than or equal to 20 characters long'
                });
            }
        });

        it('Should fail when parameter `content` is missing.', async () => {

            try {
                const data = Object.assign({}, fixture.request, { content: undefined });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"content" is required'
                });
            }
        });

        it('Should fail when parameter `content` is invalid (non-string).', async () => {

            try {
                const data = Object.assign({}, fixture.request, { content: 123 });
                await campaignService.createCampaign(data);
            } catch (exception) {

                exception.should.be.deep.equal({
                    statusCode: 422,
                    error: 'invalid_parameter',
                    description: '"content" must be a string'
                });
            }
        });

        it('Should create a campaign successfully and returning the desired values.', async () => {

            clientPutStub.resolves(fixture.response);
            const result = await campaignService.createCampaign(fixture.request);
            
            result.should.have.keys('name', 'userId', 
                'createdAt', 'scheduledTo', 'sendTo', 'content');
        });
    });
});