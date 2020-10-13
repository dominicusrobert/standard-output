module.exports = {
    'REQUEST_SUCCESS': {
        http_code: 200,
        message: 'Success'
    },
    'DATA_CREATED': {
        http_code: 201,
        message: 'New resource is created in the collection'
    },
    'REQUEST_ACCEPTED': {
        http_code: 202,
        message: 'Request has been accepted for processing, but the processing has not been completed'
    },
    'NO_CONTENT': {
        http_code: 204,
        message: 'Data not found'
    },
    'BAD_REQUEST': {
        http_code: 400,
        message: 'Invalid request message parameters'
    },
    'UNAUTHORIZED': {
        http_code: 401,
        message: 'Can not authorize the credentials'
    },
    'FORBIDDEN': {
        http_code: 403,
        message: 'User does not have the necessary permissions for the resource'
    },
    'DATA_NOT_FOUND': {
        http_code: 404,
        message: 'Data not found'
    },
    'REQUEST_TIMEOUT': {
        http_code: 408,
        message: 'The server timed out waiting for the request'
    },
    'DATA_CONFLICT': {
        http_code: 409,
        message: 'Conflict in the current state of the resource'
    },
    'UNSUPPORTED_MEDIA_TYPE': {
        http_code: 415,
        message: 'The request entity has a media type which the server or resource does not support'
    },
    'INTERNAL_SERVER_ERROR': {
        http_code: 500,
        message: 'Unexpected error happened (generic error)'
    },
    'NOT_IMPLEMENTED': {
        http_code: 501,
        message: 'This feature is not available yet'
    }
}
