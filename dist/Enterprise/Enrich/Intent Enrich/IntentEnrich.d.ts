import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { IIntentEnrich, IIntentEnrichResults } from './interfaces';
/**
 * @class IntentEnrich
 * @docs https://api-docs.zoominfo.com/#89820f82-9de3-446c-935a-3791548af946
 */
export default class IntentEnrich extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use this endpoint to enrich intent data for a company.
     * @param params IIntentEnrich
     * @returns IIntentEnrichResults
     */
    getIntentEnrich(params: IIntentEnrich): Promise<IIntentEnrichResults>;
    /**
     * Returns a list of fields you can use as input for the Intent Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getIntentEnrichInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the Intent Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getIntentEnrichOutputs(): Promise<AxiosResponse['data']>;
}
