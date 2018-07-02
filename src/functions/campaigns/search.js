'use strict';

const { campaignService, responseService } = require('../../services');

module.exports.handler = async event => {

  try {
    
    const body = JSON.parse(event.body);
    const campaigns = await campaignService.searchCampaigns(body);
    return responseService.buildSuccess(campaigns);

  } catch (exception) {
    return responseService.buildError(exception);
  }
};