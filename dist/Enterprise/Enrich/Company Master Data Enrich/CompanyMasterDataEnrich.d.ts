import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { ICompanyMasterDataEnrichResults, ICompanyMasterDataObject } from './interfaces';
/**
 * @class CompanyMasterDataEnrich
 * @docs https://api-docs.zoominfo.com/#dba1b1d1-e81c-4bb6-b7dc-6487eebcd4e6
 */
export default class CompanyMasterDataEnrich extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use this endpoint to match company information
     *
     * Note: You can input a maximum of 25 companies in a single enrich request, returning the equivalent number of matching records. See the endpoint examples for how to build queries using multiple inputs.
     * @param params ICompanyMasterDataEnrich
     * @returns ICompanyMasterDataEnrichResults
     */
    getCompanyMasterDataEnrich(params: Array<ICompanyMasterDataObject>): Promise<ICompanyMasterDataEnrichResults>;
    /**
     * Returns a list of fields you can use as input for the Company Master Data Enrich Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanyMasterDataEnrichInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the ompany Master Data Enrich Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanyMasterDataEnrichOutputs(): Promise<AxiosResponse['data']>;
}
