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
/**
 * @class OrgChartEnrich
 * @docs https://api-docs.zoominfo.com/#55e0d833-7ac3-4832-a7e0-8e5ff1d201f7
 */
class OrgChartEnrich extends Api_1.default {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    /**
     * Use this endpoint to match Org Chart information
     * @param params IOrgChartEnrich
     * @returns IOrgChartEnrichResults
     */
    getOrgChartEnrich(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post('/enrich/orgchart', params)
                .then((res) => {
                const { data } = res;
                return data;
            })
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields you can use as input for the Org Chart Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getOrgChartEnrichInputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/inputfields/orgchart/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields included in the response for the OrgChart Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getOrgChartEnrichOutputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/outputfields/orgchart/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
}
exports.default = OrgChartEnrich;
//# sourceMappingURL=OrgChartEnrich.js.map