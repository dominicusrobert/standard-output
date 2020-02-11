const ResponseTypes = require('./enums/response_types');
const ResponseCodes = require('./enums/response_codes');

class UnexpectedError extends Error {
    constructor (error) {
        super(error);
        this.type = ResponseTypes.UNEXPECTED_ERROR;
        this.error = error;
    }

    getControllerResponse() {
        return {
            code: ResponseCodes.INTERNAL_SERVER_ERROR.http_code,
            json: {
                message: 'Something unexpected happened',
                error_description: {
                    message: this.error.message,
                    stack: this.error.stack
                }
            }
        }
    }
}

module.exports = UnexpectedError;
