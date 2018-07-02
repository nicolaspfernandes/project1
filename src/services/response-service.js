'use strict';

function buildResponse(data, statusCode) {

    delete data.statusCode;
    return {
        statusCode,
        headers: {   
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        body: data
    };
}

function buildSuccess(data, statusCode) {

    const status = statusCode || (data.statusCode || 200);
    return buildResponse(data, status);
}

function buildError(error, statusCode) {

    const status = statusCode || (error.statusCode || 500);
    return buildResponse(error, status);
}

module.exports = {
    buildError, 
    buildSuccess
};
