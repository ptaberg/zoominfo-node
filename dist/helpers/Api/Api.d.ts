import { AxiosResponse } from 'axios';
export default class Api {
    protected accessToken: string;
    private apiURL;
    private limit;
    constructor(accessToken: string);
    /**
     * GET request from ZoomInfo API
     * @param endpoint
     * @returns AxiosRespone
     */
    protected get(endpoint: string): Promise<AxiosResponse<any>>;
    /**
     * POST request from ZoomInfo API
     * @param endpoint
     * @param data
     * @returns AxiosRespone
     */
    protected post(endpoint: string, data: any): Promise<AxiosResponse<any>>;
    /**
     * PUT request from ZoomInfo API
     * @param endpoint
     * @param data
     * @returns AxiosResponse
     */
    protected put(endpoint: string, data: any): Promise<AxiosResponse<any>>;
    /**
     * DELETE request from ZoomInfo API
     * @param endpoint
     * @returns AxiosRespone
     */
    protected delete(endpoint: string): Promise<AxiosResponse<any>>;
}
