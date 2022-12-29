"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = __importDefault(require("../../../helpers/Api"));
const interfaces_1 = require("./interfaces");
/**
 * @class CompanyMasterDataEnrich
 * @docs https://api-docs.zoominfo.com/#dba1b1d1-e81c-4bb6-b7dc-6487eebcd4e6
 */
class CompanyMasterDataEnrich extends Api_1.default {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    /**
     * Use this endpoint to match company information
     *
     * Note: You can input a maximum of 25 companies in a single enrich request, returning the equivalent number of matching records. See the endpoint examples for how to build queries using multiple inputs.
     * @param params ICompanyMasterDataEnrich
     * @returns ICompanyMasterDataEnrichResults
     */
    getCompanyMasterDataEnrich(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                matchCompanyInput: params,
                outputFields: interfaces_1.outputFields,
            };
            return this.post('/enrich/company-master', data)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields you can use as input for the Company Master Data Enrich Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanyMasterDataEnrichInputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/inputfields/company-master/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields included in the response for the ompany Master Data Enrich Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanyMasterDataEnrichOutputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/outputfields/company-master/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
}
exports.default = CompanyMasterDataEnrich;
//# sourceMappingURL=CompanyMasterDataEnrich.js.map