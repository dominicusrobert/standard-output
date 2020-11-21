const OutputTypes = require('./enums/output_types');

class SuccessResponse {
    constructor (result) {
        this.type = OutputTypes.SUCCESS;

        this.status = result.status;
        this.message = result.message;
        this.data = result.data;
    }

    getStandardResult() {
        return {
            statusCode: this.status.http_code,
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Methods" : "*",
            },
            body: JSON.stringify({
                response_type: this.type,
                message: this.message,
                data: this.data
            })
        }
    }
}

module.exports = SuccessResponse;
