export interface IContactEnrich {
    matchPersonInput?: Array<IContactObject>;
    outputFields?: string[];
}
export interface IContactObject {
    personId?: number;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
    phone?: string;
    jobTitle?: string;
    hashedEmail?: string;
    externalURL?: string;
    lastUpdatedDateAfter?: string;
    validDateAfter?: string;
    companyId?: string;
    companyName?: string;
    contactAccuracyScoreMin?: string;
}
export declare const outputFields: string[];
export interface IContactEnrichResults {
    success: string;
    data: Object;
}
