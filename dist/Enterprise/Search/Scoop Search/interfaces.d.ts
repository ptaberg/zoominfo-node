export interface IScoopSearch {
    publishedStartDate?: string;
    publishedEndDate?: string;
    updatedSinceCreation?: boolean;
    scoopType?: string;
    scoopTopic?: string;
    department?: string;
    scoopId?: string;
    description?: string;
    companyId?: string;
    companyName?: string;
    companyWebsite?: string;
    parentId?: string;
    ultimateParentId?: string;
    companyTicker?: Array<string>;
    companyDescription?: string;
    companyType?: string;
    address?: string;
    street?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    continent?: string;
    zipCodeRadiusMiles?: string;
    hashTagString?: string;
    techAttributeTagList?: string;
    subUnitTypes?: string;
    primaryIndustriesOnly?: boolean;
    industryCodes?: string;
    industryKeywords?: string;
    sicCodes?: string;
    naicsCodes?: string;
    revenueMin?: number;
    revenueMax?: number;
    revenue?: string;
    employeeRangeMin?: string;
    employeeRangeMax?: string;
    employeeCount?: string;
    companyRanking?: string;
    metroRegion?: string;
    locationSearchType?: string;
    fundingAmountMin?: number;
    fundingAmountMax?: number;
    fundingStartDate?: string;
    fundingEndDate?: string;
    excludedRegions?: string;
    zoominfoContactsMin?: string;
    zoominfoContactsMax?: string;
    companyStructureIncludedSubUnitTypes?: string;
    oneYearEmployeeGrowthRateMin?: string;
    oneYearEmployeeGrowthRateMax?: string;
    twoYearEmployeeGrowthRateMin?: string;
    twoYearEmployeeGrowthRateMax?: string;
    certified?: number;
    excludeDefunctCompanies?: boolean;
    personId?: string;
    emailAddress?: string;
    hashedEmail?: string;
    fullName?: string;
    firstName?: string;
    middleInitial?: string;
    lastName?: string;
    jobTitle?: string;
    excludeJobTitle?: string;
    managementLevel?: string;
    excludeManagementLevel?: string;
    boardMember?: string;
    excludePartialProfiles?: boolean;
    executivesOnly?: boolean;
    requiredFields?: string;
    contactAccuracyScoreMin?: string;
    contactAccuracyScoreMax?: string;
    jobFunction?: string;
    lastUpdatedInMonths?: number;
    hasBeenNotified?: string;
    companyPastOrPresent?: string;
    school?: string;
    degree?: string;
    locationCompanyId?: Array<string>;
    rpp?: number;
    page?: number;
    sortBy?: string;
    sortOrder?: string;
}
export interface IScoopSearchResults {
    maxResults: number;
    totalResults: number;
    currentPage: number;
    data: Array<Object>;
}