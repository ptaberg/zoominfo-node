import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { IOrgChartEnrich, IOrgChartEnrichResults } from './interfaces';
/**
 * @class OrgChartEnrich
 * @docs https://api-docs.zoominfo.com/#55e0d833-7ac3-4832-a7e0-8e5ff1d201f7
 */
export default class OrgChartEnrich extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use this endpoint to match Org Chart information
     * @param params IOrgChartEnrich
     * @returns IOrgChartEnrichResults
     */
    getOrgChartEnrich(params: IOrgChartEnrich): Promise<IOrgChartEnrichResults>;
    /**
     * Returns a list of fields you can use as input for the Org Chart Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getOrgChartEnrichInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the OrgChart Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getOrgChartEnrichOutputs(): Promise<AxiosResponse['data']>;
}
