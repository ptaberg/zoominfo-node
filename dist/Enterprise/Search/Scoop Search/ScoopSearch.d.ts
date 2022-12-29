import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { IScoopSearch, IScoopSearchResults } from './interfaces';
/**
 * @class ScoopSearch
 * @docs https://api-docs.zoominfo.com/#5e4c2ac9-caa7-41ef-bdae-efff022cff30
 */
export default class ScoopSearch extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Returns a list of Scoops from ZoomInfo's data which meet the specified search criteria.
     * @param params IScoopSearch
     * @returns IScoopSearchResults
     */
    getScoopSearch(params: IScoopSearch): Promise<IScoopSearchResults>;
    /**
     * Returns a list of fields you can use as input for the Scoop Search endpoint.
     * @returns AxiosResponse['data']
     */
    getScoopSearchInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the Scoop Search endpoint.
     *@returns AxiosResponse['data']
     */
    getScoopSearchOutputs(): Promise<AxiosResponse['data']>;
}
