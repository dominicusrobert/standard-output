const ResponseTypes = require('./enums/response_types');

class SuccessResponse {
    constructor (result) {
        this.type = ResponseTypes.SUCCESS;
        this.message = result.message;
        this.detail = result.detail;
        this.data = result.data;
    }

    getControllerResponse() {
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
