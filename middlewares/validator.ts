import openapi_validator from 'express-openapi-validator';

export const validator = openapi_validator.middleware({
    apiSpec: './openapi.yaml',
    validateRequests: true,
    validateResponses: false,
})

module.exports = validator;