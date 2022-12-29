import { AxiosResponse } from 'axios';
import Api from '../../helpers/Api';
/**
 * @class Lookup
 * @docs https://api-docs.zoominfo.com/#28358f09-9863-42af-a93c-6710a8cacf9d
 */
export default class Lookup extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Retrieve accepted Company Ranking values
     * @returns AxiosResponse['data']
     */
    getCompanyRanking(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Continent values
     * @returns AxiosResponse['data']
     */
    getContinent(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Country values
     * @returns AxiosResponse['data']
     */
    getCountry(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted State values
     * @returns AxiosResponse['data']
     */
    getState(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Contact Departments values
     * @returns AxiosResponse['data']
     */
    getContactDepartments(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Employee Count values
     * @returns AxiosResponse['data']
     */
    getEmployeeCount(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted SIC Codes values
     * @returns AxiosResponse['data']
     */
    getSICCodes(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted NACIS Codes values
     * @returns AxiosResponse['data']
     */
    getNACISCodes(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Industry Codes values
     * @returns AxiosResponse['data']
     */
    getIndustryCodes(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Job Title Hierarchy values
     * @returns AxiosResponse['data']
     */
    getJobTitleHierarchy(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Job Function values
     * @returns AxiosResponse['data']
     */
    getJobFunction(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Metro Area values
     * @returns AxiosResponse['data']
     */
    getMetroArea(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Metro Area values
     * @returns AxiosResponse['data']
     */
    getRevenueRange(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Scoop Topic values
     * @returns AxiosResponse['data']
     */
    getScoopTopic(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Scoop Types values
     * @returns AxiosResponse['data']
     */
    getScoopTypes(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Scoop Department values
     * @returns AxiosResponse['data']
     */
    getScoopDepartment(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Company Type values
     * @returns AxiosResponse['data']
     */
    getCompanyType(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Board Member values
     * @returns AxiosResponse['data']
     */
    getBoardMembers(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Management Levels values
     * @returns AxiosResponse['data']
     */
    getManagementLevels(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Sub Unit Type values
     * @returns AxiosResponse['data']
     */
    getSubUnitType(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Tech Category values
     * @returns AxiosResponse['data']
     */
    getTechCategory(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Tech Vendor values
     * @returns AxiosResponse['data']
     */
    getTechVendor(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Tech Product values
     * @returns AxiosResponse['data']
     */
    getTechProduct(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Hash Tag values
     * @returns AxiosResponse['data']
     */
    getHashTag(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Intent Topic values
     * @returns AxiosResponse['data']
     */
    getIntentTopics(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted News Categories values
     * @returns AxiosResponse['data']
     */
    getNewsCategories(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Employee Category Band values
     * @returns AxiosResponse['data']
     */
    getEmployeeCategoryBand(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Revenue Category Band values
     * @returns AxiosResponse['data']
     */
    getRevenueCategoryBand(): Promise<AxiosResponse['data']>;
    /**
     * Retrieve accepted Hierarchy Code values
     * @returns AxiosResponse['data']
     */
    getHierarchyCode(): Promise<AxiosResponse['data']>;
}
