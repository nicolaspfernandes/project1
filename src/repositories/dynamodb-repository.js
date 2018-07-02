'use strict';

const { client } = require('../infrastructure/dynamodb');

const dynamodbRepository = TableName => ({

    async putItem(data) {
        return await client.put({ TableName, Item: data });
    },
    
    async getItem(data) {
        return await client.get({ TableName, Key: data });
    },

    async query(expression, projection) {
        const result = await client.scan({ TableName });
        return result.Items;
    }
});

module.exports = dynamodbRepository;