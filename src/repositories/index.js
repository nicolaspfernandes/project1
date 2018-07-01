'use strict';

const dynamodbRepository = require('./dynamodb-repository');
const campaignRepository = dynamodbRepository('Campaigns');

module.exports = {
    campaignRepository
};