"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_Enrich_1 = __importDefault(require("./Company Enrich"));
const Company_Location_Enrich_1 = __importDefault(require("./Company Location Enrich"));
const Company_Master_Data_Enrich_1 = __importDefault(require("./Company Master Data Enrich"));
const Contact_Enrich_1 = __importDefault(require("./Contact Enrich"));
const Corporate_Hierarchy_Enrich_1 = __importDefault(require("./Corporate Hierarchy Enrich"));
const Hashtags_Enrich_1 = __importDefault(require("./Hashtags Enrich"));
const Intent_Enrich_1 = __importDefault(require("./Intent Enrich"));
const NewsEnrich_1 = __importDefault(require("./News Enrich/NewsEnrich"));
const OrgChart_Enrich_1 = __importDefault(require("./OrgChart Enrich"));
const Scoop_Enrich_1 = __importDefault(require("./Scoop Enrich"));
const Technology_Enrich_1 = __importDefault(require("./Technology Enrich"));
/**
 * @class Enrich
 */
class Enrich {
    constructor(accessToken) {
        this.companyEnrich = new Company_Enrich_1.default(accessToken);
        this.companyLocationEnrich = new Company_Location_Enrich_1.default(accessToken);
        this.companyMasterDataEnrich = new Company_Master_Data_Enrich_1.default(accessToken);
        this.contactEnrich = new Contact_Enrich_1.default(accessToken);
        this.corporateHiearchyEnrich = new Corporate_Hierarchy_Enrich_1.default(accessToken);
        this.hashtagsEnrich = new Hashtags_Enrich_1.default(accessToken);
        this.intentEnrich = new Intent_Enrich_1.default(accessToken);
        this.newsEnrich = new NewsEnrich_1.default(accessToken);
        this.orgChartEnrich = new OrgChart_Enrich_1.default(accessToken);
        this.scoopEnrich = new Scoop_Enrich_1.default(accessToken);
        this.technologyEnrich = new Technology_Enrich_1.default(accessToken);
    }
}
exports.default = Enrich;
//# sourceMappingURL=Enrich.js.map