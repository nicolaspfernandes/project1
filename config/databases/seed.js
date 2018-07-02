'use strict';

const AWS = require('aws-sdk');

const region = 'sa-east-1';
const tableName = 'Campaigns';
const endpoint = 'http://localhost:8000';

const client = new AWS.DynamoDB({ region, endpoint });

var campaignsTable = {
    TableName: tableName,
    KeySchema: [{
        AttributeName: 'name', 
        KeyType: 'HASH'
    }, {
        AttributeName: 'scheduledTo',
        KeyType: 'RANGE'
    }],
    AttributeDefinitions: [{
        AttributeName: 'name',
        AttributeType: 'S'
    }, {
        AttributeName: 'scheduledTo',
        AttributeType: 'S'
    }],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1, 
        WriteCapacityUnits: 1
    }
};

client.createTable(campaignsTable);