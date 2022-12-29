import { AxiosResponse } from 'axios';
import Api from '../helpers/Api';
import { IComplianceParams, IComplianceResult } from './interfaces';
/**
 * @class Compliance
 * @docs https://api-docs.zoominfo.com/#6b305a99-cbad-4a44-aaa4-23b14d126a43
 */
export default class Compliance extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Returns a list of compliance-related details from ZoomInfo's data
     * @param params IComplianceParams
     * @returns IComplianceResult
     */
    compliance(params: IComplianceParams): Promise<IComplianceResult>;
    /**
     * Returns a list of fields you can use as input for the Compliance endpoint.
     * @returns AxiosResponse['data']
     */
    complianceInputs(): Promise<AxiosResponse['data']>;
    /**
     * Returns a list of fields included in the response for the Compliance endpoint.
     * @returns AxiosResponse['data']
     */
    compliancehOutputs(): Promise<AxiosResponse['data']>;
}
