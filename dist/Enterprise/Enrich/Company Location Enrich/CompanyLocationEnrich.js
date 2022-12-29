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
 * @class CompanyLocationEnrich
 * @docs https://api-docs.zoominfo.com/#e87d8559-3d5e-4477-97fb-d363b420b757
 */
class CompanyLocationEnrich extends Api_1.default {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    /**
     * se Company Location Enrich to retrieve company location detail.
     * @param params ICompanyLocationEnrich
     * @returns ICompanyLocationEnrichResults
     */
    getCompanyLocationEnrich(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post('/enrich/location', params)
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
     * Returns a list of fields you can use as input for the Company Location Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanyLocationEnrichInputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/inputfields/location/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields included in the response for the Company Location Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCompanyLocationEnrichOutputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/outputfields/location/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
}
exports.default = CompanyLocationEnrich;
//# sourceMappingURL=CompanyLocationEnrich.js.map