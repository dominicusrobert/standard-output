const OutputTypes = require('./enums/output_types');
const StatusCodes = require('./enums/status_codes');

class UnexpectedError extends Error {
    constructor (error) {
        super(error);
        this.type = OutputTypes.UNEXPECTED_ERROR;
        this.error = error;
    }

    getStandardResult() {
        return {
            code: StatusCodes.INTERNAL_SERVER_ERROR.http_code,
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
