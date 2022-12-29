import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { IContactEnrichResults, IContactObject } from './interfaces';
/**
 * @class ContactEnrich
 * @docs https://api-docs.zoominfo.com/#cf83bb37-31cf-45d3-a276-08625ca04c60
 */
export default class ContactEnrich extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use Contact Enrich to retrieve contact detail using valid query parameters.
     *
     * Note: You can input a maximum of 25 contacts in a single enrich request, returning the equivalent number of matching records
     *
     * To match a contact, you must use one of the following combinations of parameters to construct your input:
     *
     * 1. personId OR emailAddress OR hashedEmail OR phone AND companyId OR companyName
     * 2. firstName and lastName AND companyId OR companyName
     * 3. fullName AND companyId OR companyName
     *
     * @param params Array<IContactEnrichSearch>
     * @returns IContactEnrichResults
     */
    getContactEnrich(params: Array<IContactObject>): Promise<IContactEnrichResults>;
    /**
     * Returns a list of fields you can use as input for the Contact Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getContactEnrichInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the Contact Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getContantEnrichOutputs(): Promise<AxiosResponse['data']>;
}
