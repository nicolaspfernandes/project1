'use strict';

const AWS = require('aws-sdk');

console.log('Region: ', process.env.DYNAMODB_REGION);
console.log('Endpoint: ', process.env.DYNAMODB_ENDPOINT);

const client = new AWS.DynamoDB.DocumentClient({
    region: process.env.DYNAMODB_REGION,
    endpoint: process.env.DYNAMODB_ENDPOINT    
});

module.exports = client;
