import { AxiosResponse } from 'axios';
import Api from '../helpers/Api';
import { IPEnrichParams, IPEnrichResult } from './interfaces';
/**
 * @class IPEnrich
 * @docs https://api-docs.zoominfo.com/#9ac0b1b0-1bef-421f-99a6-918540439fc3
 */
export default class IPEnrich extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use this endpoint to match IP addresses.
     * @param params IPEnrichParams
     * @returns IPEnrichResult
     */
    enrichIP(params: IPEnrichParams): Promise<IPEnrichResult>;
    /**
     * Returns a list of fields you can use as input for the IPEnrich Search endpoint.
     * @returns AxiosResponse['data']
     */
    IPEnrichInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the IPEnrich endpoint.
     * @returns AxiosResponse['data']
     */
    IPEnrichOutputs(): Promise<AxiosResponse['data']>;
}
