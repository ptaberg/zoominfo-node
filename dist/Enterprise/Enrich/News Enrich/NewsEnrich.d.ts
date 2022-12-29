import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { INewsEnrich, INewsEnrichResults } from './interfaces';
/**
 * @class NewsEnrich
 * @docs https://api-docs.zoominfo.com/#a7f26c01-cc5d-4291-a3e6-5ff41b779420
 */
export default class NewsEnrich extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use this endpoint to enrich news data for a company.
     * @param params INewsEnrich
     * @returns INewsEnrichResults
     */
    getNewsEnrich(params: INewsEnrich): Promise<INewsEnrichResults>;
    /**
     * Returns a list of fields you can use as input for the News Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getNewsEnrichInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the News Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getNewsEnrichOutputs(): Promise<AxiosResponse['data']>;
}
