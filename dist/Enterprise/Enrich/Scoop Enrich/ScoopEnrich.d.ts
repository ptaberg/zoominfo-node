import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { IScoopEnrich, IScoopEnrichResult } from './interfaces';
/**
 * @class ScoopEnrich
 * @docs https://api-docs.zoominfo.com/#ccbc0b77-f69c-43ef-9cda-ccf140485811
 */
export default class ScoopEnrich extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use this endpoint to match Scoop information
     * @param params IScoopEnrich
     * @returns IScoopEnrichResult
     */
    getScoopEnrich(params: IScoopEnrich): Promise<IScoopEnrichResult>;
    /**
     * Returns a list of fields you can use as input for the Scoop Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getScoopEnrichInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the Scoop Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getScoopEnrichOutputs(): Promise<AxiosResponse['data']>;
}
