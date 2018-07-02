'use strict';

const { responses } = require('../../utils');
const { campaignService } = require('../../services');

module.exports.handler = async event => {

  try {
    
    const body = JSON.parse(event.body);
    const campaign = await campaignService.createCampaign(body);
    return responses.buildSuccess({});

  } catch (exception) {
    return responses.buildError(exception);
  }
};