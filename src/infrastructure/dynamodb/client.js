'use strict';

const AWS = require('aws-sdk');
const { DYNAMODB_REGION, DYNAMODB_ENDPOINT } = process.env;

const client = new AWS.DynamoDB.DocumentClient({
    region: DYNAMODB_REGION,
    endpoint: DYNAMODB_ENDPOINT
});

module.exports = client;
