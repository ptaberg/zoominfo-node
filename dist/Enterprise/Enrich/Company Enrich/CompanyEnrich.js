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
 * @class CompanyEnrich
 * @docs https://api-docs.zoominfo.com/#dba1b1d1-e81c-4bb6-b7dc-6487eebcd4e6
 */
class CompanyEnrich extends Api_1.default {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    /**
     * Use Company Enrich to retrieve company detail using valid query parameters.
     *
     * Note: You can input a maximum of 25 companies in a single enrich request, returning the equivalent number of matching records
     * @param params Array<ICompanyObject>
     * @returns ICompanyEnrichResults
     */
    getCompanyEnrich(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                matchCompanyInput: params,
                outputFields: interfaces_1.outputFields,
            };
            return this.post('/enrich/company', data)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields you can use as input for the Company Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanyEnrichInputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/inputfields/company/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields included in the response for the Company Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanyEnrichOutputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/outputfields/company/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
}
exports.default = CompanyEnrich;
//# sourceMappingURL=CompanyEnrich.js.map