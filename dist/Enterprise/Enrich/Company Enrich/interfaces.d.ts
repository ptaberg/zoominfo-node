export interface ICompanyEnrich {
    matchCompanyInput: Array<ICompanyObject>;
    outputFields: string[];
}
export interface ICompanyObject {
    companyId?: string;
    companyName?: string;
    companyWebsite?: string;
    companyTicker?: string;
    companyPhone?: string;
    companyFax?: string;
    companyStreet?: string;
    companyCity?: string;
    companyState?: string;
    companyZipCode?: string;
    companyCountry?: string;
    ipAddress?: string;
}
export declare const outputFields: string[];
export interface ICompanyEnrichResults {
    success: boolean;
    data: Array<Object>;
}
