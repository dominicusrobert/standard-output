const OutputTypes = require('./enums/response_types');

class SuccessResponse {
    constructor (result) {
        this.type = OutputTypes.SUCCESS;
        this.message = result.message;
        this.detail = result.detail;
        this.data = result.data;
    }

    getStandardResult() {
        return {
            code: this.detail.http_code,
            json: {
                message: this.message,
                data: this.data
            }
        }
    }
}

module.exports = SuccessResponse;
