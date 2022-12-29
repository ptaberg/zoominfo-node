import CompanyEnrich from './Company Enrich';
import CompanyLocationEnrich from './Company Location Enrich';
import CompanyMasterDataEnrich from './Company Master Data Enrich';
import ContactEnrich from './Contact Enrich';
import CorporateHiearchyEnrich from './Corporate Hierarchy Enrich';
import HashtagsEnrich from './Hashtags Enrich';
import IntentEnrich from './Intent Enrich';
import NewsEnrich from './News Enrich/NewsEnrich';
import OrgChartEnrich from './OrgChart Enrich';
import ScoopEnrich from './Scoop Enrich';
import TechnologyEnrich from './Technology Enrich';
/**
 * @class Enrich
 */
export default class Enrich {
    companyEnrich: CompanyEnrich;
    companyLocationEnrich: CompanyLocationEnrich;
    companyMasterDataEnrich: CompanyMasterDataEnrich;
    contactEnrich: ContactEnrich;
    corporateHiearchyEnrich: CorporateHiearchyEnrich;
    hashtagsEnrich: HashtagsEnrich;
    intentEnrich: IntentEnrich;
    newsEnrich: NewsEnrich;
    orgChartEnrich: OrgChartEnrich;
    scoopEnrich: ScoopEnrich;
    technologyEnrich: TechnologyEnrich;
    constructor(accessToken: string);
}
