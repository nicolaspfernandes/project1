'use strict';

const moment = require('moment');

const { campaignRepository } = require('../repositories');
const { validate, campaignSchema } = require('../schemas');

const campaignService = {

    async createCampaign(data) {

        await validate(data, campaignSchema.createCampaignSchema);

        data.createdAt = moment().format('DD/MM/YYYY');
        await campaignRepository.putItem(data, (err, data) => {
            console.log(err);
        });
        const result = await campaignRepository.query({
            KeyConditionExpression: "#p_name = :pName AND userId = :pUserId",
            ExpressionAttributeNames: {
                "#p_name": "name"
            },
            ExpressionAttributeValues: {
                ':pName': data.name,
                ':pUserId': data.userId
            }
        })
        return result;
    },

    async getCampaignsBySearch(search, projection) {
        return await campaignRepository.find();
    }
};

module.exports = campaignService;