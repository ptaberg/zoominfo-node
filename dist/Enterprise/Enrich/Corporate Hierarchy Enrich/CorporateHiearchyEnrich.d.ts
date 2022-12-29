import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { ICorporateHierarchyEnrichResults, ICorporateHierarchyObject } from './interfaces';
/**
 * @class CorporateHiearchyEnrich
 * @docs https://api-docs.zoominfo.com/#a02f2173-3808-467f-be24-54b4cc93f8c3
 */
export default class CorporateHiearchyEnrich extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use this endpoint to match corporate hierarchical information.
     * @param params Array<ICorporateHierarchyEnrich>
     * @returns ICorpotateHierarchyEnrichResults
     */
    getCorporateHiearchyEnrich(params: Array<ICorporateHierarchyObject>): Promise<ICorporateHierarchyEnrichResults>;
    /**
     * Returns a list of fields you can use as input for the Corporate Hierarchy Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCorporateHiearchyEnrichInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the Corporate Hierarchy Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCorporateHiearchyEnrichOutputs(): Promise<AxiosResponse['data']>;
}
