import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { ICompanyLocationEnrich, ICompanyLocationEnrichResults } from './interfaces';
/**
 * @class CompanyLocationEnrich
 * @docs https://api-docs.zoominfo.com/#e87d8559-3d5e-4477-97fb-d363b420b757
 */
export default class CompanyLocationEnrich extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * se Company Location Enrich to retrieve company location detail.
     * @param params ICompanyLocationEnrich
     * @returns ICompanyLocationEnrichResults
     */
    getCompanyLocationEnrich(params: ICompanyLocationEnrich): Promise<ICompanyLocationEnrichResults>;
    /**
     * Returns a list of fields you can use as input for the Company Location Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanyLocationEnrichInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the Company Location Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanyLocationEnrichOutputs(): Promise<AxiosResponse['data']>;
}
