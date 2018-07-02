'use strict';

const { client } = require('../infrastructure/dynamodb');

const dynamodbRepository = TableName => ({

    async putItem(data) {
        return await client.put({ TableName, Item: data });
    },
    
    async query(expression, projection) {

        expression.TableName = TableName;
        const result = await client.query(expression);
        return result.Items;
    }
});

module.exports = dynamodbRepository;