'use strict';

const Joi = require('./joi');
const { errors } = require('../utils');

const validate = async (model, schema) => {

    try {
        await Joi.validate(model, schema);
    } catch (exception) {
        throw exception.details.map(detail =>
            errors.invalidParameter(detail.message))[0];
    }
}

module.exports = validate;