'use strict';

const { client } = require('../dynamodb');

var campaignsTable = {
    TableName: 'Campaigns',
    KeySchema: [{
        AttributeName: 'campaignName', 
        KeyType: 'HASH'
    }, {
        AttributeName: 'userId',
        KeyType: 'RANGE'
    }],
    AttributeDefinitions: [{
        AttributeName: 'campaignName',
        AttributeType: 'S'
    }, {
        AttributeName: 'userId',
        AttributeType: 'N'
    }],
    ProvisionedThroughput: {
        ReadCapacityUnits: process.env.DYNAMODB_READ_UNITS, 
        WriteCapacityUnits: process.env.DYNAMODB_WRITE_UNITS
    }
};

client.createTable(campaignsTable, (error, data) => {
    console.log(error);
    console.log(data);
});
