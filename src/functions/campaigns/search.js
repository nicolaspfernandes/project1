'use strict';

/*
const { success, errors } = require('../../utils/body');
const service = require('../../services/customer-service');
const helpers = require('../../utils/helpers');
const Customer = require('../../models/customer');
const schema = require('../../schemas/customer-schema').create;

module.exports.handler = async (event, context) => {

  try {

    context.callbackWaitsForEmptyEventLoop = false;

    const payload = JSON.parse(event.body);

    await schema.validate(payload, { abortEarly: false });

    const model = new Customer(
      payload.type,
      payload.cnpj,
      payload.cpf,
      payload.companyName,
      payload.tradeName,
      payload.stateRegistration,
      payload.name,
      payload.addresses
    );

    const user = helpers.getUser(event);
    const response = await service.create(model, user);

    return success(response);
  }
  catch (error) {
    return errors(error);
  }
};
*/