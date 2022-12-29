import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { ICompanyEnrichResults, ICompanyObject } from './interfaces';
/**
 * @class CompanyEnrich
 * @docs https://api-docs.zoominfo.com/#dba1b1d1-e81c-4bb6-b7dc-6487eebcd4e6
 */
export default class CompanyEnrich extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use Company Enrich to retrieve company detail using valid query parameters.
     *
     * Note: You can input a maximum of 25 companies in a single enrich request, returning the equivalent number of matching records
     * @param params Array<ICompanyObject>
     * @returns ICompanyEnrichResults
     */
    getCompanyEnrich(params: Array<ICompanyObject>): Promise<ICompanyEnrichResults>;
    /**
     * Returns a list of fields you can use as input for the Company Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanyEnrichInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the Company Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanyEnrichOutputs(): Promise<AxiosResponse['data']>;
}
