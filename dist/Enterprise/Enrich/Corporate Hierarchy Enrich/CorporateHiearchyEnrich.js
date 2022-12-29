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
 * @class CorporateHiearchyEnrich
 * @docs https://api-docs.zoominfo.com/#a02f2173-3808-467f-be24-54b4cc93f8c3
 */
class CorporateHiearchyEnrich extends Api_1.default {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    /**
     * Use this endpoint to match corporate hierarchical information.
     * @param params Array<ICorporateHierarchyEnrich>
     * @returns ICorpotateHierarchyEnrichResults
     */
    getCorporateHiearchyEnrich(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                matchCompanyInput: params,
                outputFields: interfaces_1.outputFields,
            };
            return this.post('/enrich/corporatehierarchy', data)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields you can use as input for the Corporate Hierarchy Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCorporateHiearchyEnrichInputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/inputfields/corporatehierarchy/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields included in the response for the Corporate Hierarchy Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getCorporateHiearchyEnrichOutputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/outputfields/corporatehierarchy/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
}
exports.default = CorporateHiearchyEnrich;
//# sourceMappingURL=CorporateHiearchyEnrich.js.map