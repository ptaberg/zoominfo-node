import { AxiosResponse } from 'axios';
import Api from '../../helpers/Api';
/**
 * @class Usage
 * @docs https://api-docs.zoominfo.com/#df4f66e5-07dc-4449-9d83-b0c189d7d2be
 */
export default class Usage extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Retrieve current usage status using this endpoint.
     * @returns AxiosResponse['data']
     */
    getUsage(): Promise<AxiosResponse['data']>;
}
