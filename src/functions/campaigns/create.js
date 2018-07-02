'use strict';

const { campaignService, responseService } = require('../../services');

module.exports.handler = async event => {

  try {
    
    const body = JSON.parse(event.body);
    const campaign = await campaignService.createCampaign(body);
    return responseService.buildSuccess(campaign, 201);

  } catch (exception) {
    return responseService.buildError(exception);
  }
};