import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { ITechnologyEnrich, ITechnologyEnrichResults } from './interfaces';
/**
 * @class TechnologyEnrich
 * @docs https://api-docs.zoominfo.com/#aa294cb1-858e-406b-81d8-4cb2fe4efaf3
 */
export default class TechnologyEnrich extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use this endpoint to match Technology information
     * @param params ITechnologyEnrich
     * @returns ITechnologyEnrichResults
     */
    getTechnologyEnrich(params: ITechnologyEnrich): Promise<ITechnologyEnrichResults>;
    /**
     * Returns a list of fields you can use as input for the Technology Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getTechnologyEnrichInputs(): Promise<AxiosResponse['data']>;
}
