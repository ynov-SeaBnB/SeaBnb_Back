const openapi_validator = require('express-openapi-validator');

const validator = openapi_validator.middleware({
    apiSpec: './openapi.yaml',
    validateRequests: true,
    validateResponses: false,
})

module.exports = validator;