import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { INewsSearch, INewsSearchResults } from './interfaces';
/**
 * @class NewsSearch
 * @docs https://api-docs.zoominfo.com/#30b8d735-cfa2-44ca-b7e8-2b9b16786df1
 */
export default class NewsSearch extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use News Search to retrieve news using valid query parameters.
     * @param params INewsSearch
     * @returns INewsSearchResults
     */
    getNewsSearch(params: INewsSearch): Promise<INewsSearchResults>;
    /**
     * Returns a list of fields you can use as input for the News Search endpoint.
     * @returns AxiosResponse['data']
     */
    getNewsSearchInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the News Search endpoint.
     * @returns AxiosResponse['data']
     */
    getNewsSearchOutputs(): Promise<AxiosResponse['data']>;
}
