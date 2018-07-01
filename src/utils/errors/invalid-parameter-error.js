'use strict';

const invalidParameter = value => ({
  error: value.error || 'invalid_parameter',
  description: value.description || value,
  statusCode: 422
});

module.exports = invalidParameter;
