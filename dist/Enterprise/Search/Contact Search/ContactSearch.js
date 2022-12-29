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
 * @class ContactSearch
 * @docs https://api-docs.zoominfo.com/#7c634f30-5b38-4453-b9d1-7b1632e0b23e
 */
class ContactSearch extends Api_1.default {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    /**
     * Use Contact Search to retrieve contacts using valid query parameters.
     * @param params IContactSearch
     * @returns IContactSearchResults
     */
    getContactSearch(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post('/search/contact', params)
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
     * Returns a list of fields you can use as input for the Contact Search endpoint.
     * @returns AxiosResponse['data']
     */
    getContactSearchInputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/inputfields/contact/search')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields included in the response for the Contact Search endpoint.
     * @returns AxiosResponse['data']
     */
    getContactSearchOutputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/outputfields/contact/search')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
}
exports.default = ContactSearch;
//# sourceMappingURL=ContactSearch.js.map