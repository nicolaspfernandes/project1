'use strict';

const chai = require('chai');
const sinon = require('sinon');
const fixture = require('./create.fixture');
const { campaigns } = require('../../src/functions');

chai.should();

describe('Testing src/functions/create.js script.', () => {

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
    });
});


/*
    name: Joi.string().alphanum().trim().min(3).max(30).required(),
    userId: Joi.number().required(),
    scheduledTo: Joi.date().format('DD/MM/YYYY').greater('now').required(),
    sendTo: Joi.string().alphanum().trim().min(3).max(20).required(),
    content: Joi.string().alphanum().trim().required() */