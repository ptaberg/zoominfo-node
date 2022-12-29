import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { ICompanySearch, ICompanySearchResults } from './interfaces';
/**
 * @class CompanySearch
 * @docs https://api-docs.zoominfo.com/#4845df6a-2b3c-4e87-b640-e07e8c73f31d
 */
export default class CompanySearch extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Returns a list of Companies from ZoomInfo's data which meet the specified search criteria.
     * @param params ICompanySearch
     * @erturns ICompanySearchResults
     */
    getCompanySearch(params: ICompanySearch): Promise<ICompanySearchResults>;
    /**
     * Returns a list of fields you can use as input for the Company Search endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanySearchInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the Company Search endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanySearchOutputs(): Promise<AxiosResponse['data']>;
}
