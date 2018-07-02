'use strict';

const AWS = require('aws-sdk');

const client = new AWS.DynamoDB({ 
    region: 'sa-east-1', 
    endpoint: 'http://localhost:8000', 
    accessKeyId: 'test', 
    secretAccessKey: 'test' 
});

const campaignsTable = {
    TableName: 'Campaigns',
    KeySchema: [{
       AttributeName: 'userId',
       KeyType: 'HASH' 
    }, {
        AttributeName: 'name', 
        KeyType: 'RANGE'
    }],
    AttributeDefinitions: [{
        AttributeName: 'name',
        AttributeType: 'S'
    }, {
        AttributeName: 'userId',
        AttributeType: 'N'
    }],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1, 
        WriteCapacityUnits: 1
    }
};

client.createTable(campaignsTable);