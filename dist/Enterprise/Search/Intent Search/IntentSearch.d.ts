import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { IIntentSearchResults, IIntentSearch } from './interfaces';
/**
 * @class IntentSearch
 * @docs https://api-docs.zoominfo.com/#a138aca7-86eb-4dd4-b0d8-f72ff32090ea
 */
export default class IntentSearch extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use this endpoint to search for recommended contacts based on intent data.
     * @param params IIntentSearch
     */
    getIntentSearch(params: IIntentSearch): Promise<IIntentSearchResults>;
    /**
     * Returns a list of fields you can use as input for the Intent Search endpoint.
     * @returns AxiosResponse['data']
     */
    getIntentSearchInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the Intent Search endpoint.
     * @returns AxiosResponse['data']
     */
    getIntentSearchOutputs(): Promise<AxiosResponse['data']>;
}
