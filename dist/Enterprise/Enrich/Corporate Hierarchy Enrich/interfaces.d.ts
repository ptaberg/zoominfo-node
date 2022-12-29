export interface ICorporateHierarchyObject {
    companyId?: string;
    companyName?: string;
    companyWebsite?: string;
}
export interface ICorporateHierarchyEnrich {
    matchCompanyInput: Array<ICorporateHierarchyObject>;
    outputFields: string[];
}
export declare const outputFields: string[];
export interface ICorporateHierarchyEnrichResults {
    success: string;
    data: Object;
}
