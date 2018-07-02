'use strict';

const { client } = require('../infrastructure/dynamodb');

const dynamodbRepository = TableName => ({

    putItem(data) {
        return client.put({ TableName, Item: data }).promise();
    },
    
    async scan() {
        const result = await client.scan({ TableName }).promise();
        return result.Items;
    },

    async query(expression) {

        expression = Object.assign({}, expression, { TableName });
        const result = await client.query(expression).promise();
        return result.Items;
    }
});

module.exports = dynamodbRepository;