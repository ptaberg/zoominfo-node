import CompanySearch from './Company Search';
import ContactSearch from './Contact Search';
import IntentSearch from './Intent Search';
import NewsSearch from './News Search';
import ScoopSearch from './Scoop Search';
/**
 * @class Search
 * @docs https://api-docs.zoominfo.com/#156045a9-6446-4c61-b9fb-706476cfac6a
 */
export default class Search {
    companySearch: CompanySearch;
    contactSearch: ContactSearch;
    intenetSearch: IntentSearch;
    newsSearch: NewsSearch;
    scoopSearch: ScoopSearch;
    constructor(accessToken: string);
}
