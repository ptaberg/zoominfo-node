"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_Search_1 = __importDefault(require("./Company Search"));
const Contact_Search_1 = __importDefault(require("./Contact Search"));
const Intent_Search_1 = __importDefault(require("./Intent Search"));
const News_Search_1 = __importDefault(require("./News Search"));
const Scoop_Search_1 = __importDefault(require("./Scoop Search"));
/**
 * @class Search
 * @docs https://api-docs.zoominfo.com/#156045a9-6446-4c61-b9fb-706476cfac6a
 */
class Search {
    constructor(accessToken) {
        this.companySearch = new Company_Search_1.default(accessToken);
        this.contactSearch = new Contact_Search_1.default(accessToken);
        this.intenetSearch = new Intent_Search_1.default(accessToken);
        this.newsSearch = new News_Search_1.default(accessToken);
        this.scoopSearch = new Scoop_Search_1.default(accessToken);
    }
}
exports.default = Search;
//# sourceMappingURL=Search.js.map