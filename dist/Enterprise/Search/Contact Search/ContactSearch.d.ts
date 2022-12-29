import { AxiosResponse } from 'axios';
import { IContactSearch, IContactSearchResults } from './interfaces';
import Api from '../../../helpers/Api';
/**
 * @class ContactSearch
 * @docs https://api-docs.zoominfo.com/#7c634f30-5b38-4453-b9d1-7b1632e0b23e
 */
export default class ContactSearch extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use Contact Search to retrieve contacts using valid query parameters.
     * @param params IContactSearch
     * @returns IContactSearchResults
     */
    getContactSearch(params: IContactSearch): Promise<IContactSearchResults>;
    /**
     * Returns a list of fields you can use as input for the Contact Search endpoint.
     * @returns AxiosResponse['data']
     */
    getContactSearchInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the Contact Search endpoint.
     * @returns AxiosResponse['data']
     */
    getContactSearchOutputs(): Promise<AxiosResponse['data']>;
}
