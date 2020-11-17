const OutputTypes = require('./enums/output_types');

class ExpectedError extends Error {
    constructor () {
        super();

        this.type = OutputTypes.EXPECTED_ERROR;
        this.status;
        this.message;
    }

    additionalInfo(data) {
        this.status = data.status;
        this.message = data.message;
    }

    getStandardResult() {
        return {
            statusCode: this.status.http_code,
            body: JSON.stringify({
                message: this.message,
                error_description: this.detail
            })
        }
    }
}

module.exports = ExpectedError;
