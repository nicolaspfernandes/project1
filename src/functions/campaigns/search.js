'use strict';

const { campaignService, responseService } = require('../../services');

module.exports.handler = async () => {

  try {
    
    const campaigns = await campaignService.searchCampaigns();
    return responseService.buildSuccess(campaigns);

  } catch (exception) {
    return responseService.buildError(exception);
  }
};