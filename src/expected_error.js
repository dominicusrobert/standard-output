const ResponseTypes = require('./enums/response_types');

class ExpectedError extends Error {
    constructor () {
        super();

        this.type = ResponseTypes.EXPECTED_ERROR;
        this.message;
        this.detail;
    }

    additionalInfo(data) {
        this.message = data.message;
        this.detail = data.detail;
    }

    getControllerResponse() {
        return {
            code: this.detail.http_code,
            json: {
                message: this.message,
                error_description: this.detail
            }
        }
    }
}

module.exports = ExpectedError;
