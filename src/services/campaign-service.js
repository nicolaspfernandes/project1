'use strict';

const moment = require('moment');

const { campaignRepository } = require('../repositories');
const { validate, campaignSchema } = require('../schemas');

const campaignService = {

    async createCampaign(data) {

        await validate(data, campaignSchema.createCampaignSchema);

        const item = Object.assign({}, data, {
            createdAt: moment().format('DD/MM/YYYY')
        });
        await campaignRepository.putItem(item);

        return item;
    },

    searchCampaigns() {
        return campaignRepository.scan();
    },

    async searchCampaignsByUser(userId) {
        
        await validate({ userId }, campaignSchema.searchCampaignsByUserSchema);

        return campaignRepository.query({
            IndexName: 'ScheduledToIndex',
            KeyConditionExpression: 'userId = :pUserId',
            ExpressionAttributeValues: {
                ':pUserId': Number(userId)
            },
            ScanIndexForward: false
        });
    }
};

module.exports = campaignService;