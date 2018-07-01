'use strict';

const baseJoi = require('joi');
const dateExtensions = require('joi-date-extensions');

const Joi = baseJoi.extend(dateExtensions);

module.exports = Joi;