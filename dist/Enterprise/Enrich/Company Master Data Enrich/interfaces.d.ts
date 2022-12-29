export interface ICompanyMasterDataEnrich {
    matchCompanyInput: Array<ICompanyMasterDataObject>;
    outputFields: string[];
}
export interface ICompanyMasterDataObject {
    zi_c_location_id?: string;
    zi_es_ecid?: number;
    zi_es_location_id?: string;
    zi_c_url?: string;
    zi_c_name?: string;
    phone?: {
        zi_c_country?: string;
        zi_c_phone?: string;
    };
    address?: {
        zi_c_street?: string;
        zi_c_city?: string;
        zi_c_state?: string;
        zi_c_zip?: string;
        zi_c_country?: string;
    };
    email?: string;
    match_reasons?: Array<Object>;
}
export declare const outputFields: string[];
export interface ICompanyMasterDataEnrichResults {
    success: string;
    data: {
        result: [];
    };
}
