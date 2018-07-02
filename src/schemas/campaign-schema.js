'use strict';

const Joi = require('./joi');

const createCampaignSchema = Joi.object().keys({
    name: Joi.string().trim().min(3).max(30).required(),
    userId: Joi.number().required(),
    scheduledTo: Joi.date().format('DD/MM/YYYY').greater('now').required(),
    sendTo: Joi.string().alphanum().trim().min(3).max(20).required(),
    content: Joi.string().trim().required()
});

module.exports = {
    createCampaignSchema
};