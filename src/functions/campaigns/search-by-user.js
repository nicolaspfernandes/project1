'use strict';

const { campaignService, responseService } = require('../../services');

module.exports.handler = async (event) => {

  try {
    
    const { pathParameters } = event;
    const campaigns = await campaignService.searchCampaignsByUser(pathParameters.userId);
    return responseService.buildSuccess(campaigns);

  } catch (exception) {
    return responseService.buildError(exception);
  }
};