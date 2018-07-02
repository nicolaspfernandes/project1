'use strict';

const moment = require('moment');

const { campaignRepository } = require('../repositories');
const { validate, campaignSchema } = require('../schemas');

const campaignService = {

    async createCampaign(data) {

        await validate(data, campaignSchema.createCampaignSchema);

        data.createdAt = moment().format('DD/MM/YYYY');
        return await campaignRepository.putItem(data);
    },

    async searchCampaigns(search, projection) {
        return await campaignRepository.query();
    }
};

module.exports = campaignService;