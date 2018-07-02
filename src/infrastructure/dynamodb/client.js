'use strict';

const AWS = require('aws-sdk');
const { 
    DYNAMODB_REGION, 
    DYNAMODB_ENDPOINT,
    DYNAMODB_ACCESS_KEY_ID,
    DYNAMODB_SECRET_ACCESS_KEY 
} = process.env;

const client = new AWS.DynamoDB.DocumentClient({
    region: DYNAMODB_REGION,
    endpoint: DYNAMODB_ENDPOINT,
    accessKeyId: DYNAMODB_ACCESS_KEY_ID,
    secretAccessKey: DYNAMODB_SECRET_ACCESS_KEY
});

module.exports = client;
