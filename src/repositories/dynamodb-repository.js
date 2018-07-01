'use strict';

const client = require('../infrastructure/dynamodb/client');

const dynamodbRepository = TableName => {

    return {

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
    };
};

module.exports = dynamodbRepository;