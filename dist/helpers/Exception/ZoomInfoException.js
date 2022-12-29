"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ZoomInfoException extends Error {
    constructor(status, errorMessage, errorData) {
        super(errorMessage);
        this.status = status;
        this.message = errorMessage;
        this.data = {
            status,
            errorMessage,
            errorData,
        };
        this.name = 'ZoomInfoException';
    }
    /**
     * Get the status code of the exception
     * @returns status code
     */
    getStatus() {
        return this.status;
    }
    /**
     * Get the data of the exception
     * @returns response data
     */
    getData() {
        return this.data;
    }
}
exports.default = ZoomInfoException;
//# sourceMappingURL=ZoomInfoException.js.map