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
 * @class IntentSearch
 * @docs https://api-docs.zoominfo.com/#a138aca7-86eb-4dd4-b0d8-f72ff32090ea
 */
class IntentSearch extends Api_1.default {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    /**
     * Use this endpoint to search for recommended contacts based on intent data.
     * @param params IIntentSearch
     */
    getIntentSearch(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post('/search/intent', params)
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
     * Returns a list of fields you can use as input for the Intent Search endpoint.
     * @returns AxiosResponse['data']
     */
    getIntentSearchInputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/inputfields/intent/search')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields included in the response for the Intent Search endpoint.
     * @returns AxiosResponse['data']
     */
    getIntentSearchOutputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/outputfields/intent/search')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
}
exports.default = IntentSearch;
//# sourceMappingURL=IntentSearch.js.map