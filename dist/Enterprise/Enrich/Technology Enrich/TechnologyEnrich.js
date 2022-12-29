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
 * @class TechnologyEnrich
 * @docs https://api-docs.zoominfo.com/#aa294cb1-858e-406b-81d8-4cb2fe4efaf3
 */
class TechnologyEnrich extends Api_1.default {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    /**
     * Use this endpoint to match Technology information
     * @param params ITechnologyEnrich
     * @returns ITechnologyEnrichResults
     */
    getTechnologyEnrich(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post('/enrich/tech', params)
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
     * Returns a list of fields you can use as input for the Technology Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getTechnologyEnrichInputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/inputfields/tech/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
}
exports.default = TechnologyEnrich;
//# sourceMappingURL=TechnologyEnrich.js.map