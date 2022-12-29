export default class ZoomInfoException extends Error {
    private status;
    private data;
    constructor(status: number, errorMessage: string, errorData?: Object);
    /**
     * Get the status code of the exception
     * @returns status code
     */
    getStatus(): number;
    /**
     * Get the data of the exception
     * @returns response data
     */
    getData(): Object;
}
