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
            headers: {
                "Access-Control-Alllow-Headers" : "Content-Type",
                "Access-Control-Alllow-Origin" : "*",
                "Access-Control-Alllow-Methods" : "OPTIONS,POST",
            }
            body: JSON.stringify({
                response_type: this.type,
                message: 'Something unexpected happened',
                error_description: this.error
            })
        }
    }
}

module.exports = UnexpectedError;
