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
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR.http_code,
            body: JSON.stringify({
                message: 'Something unexpected happened',
                error_description: this.error
            })
        }
    }
}

module.exports = UnexpectedError;
