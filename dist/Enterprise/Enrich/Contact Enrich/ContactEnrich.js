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
 * @class ContactEnrich
 * @docs https://api-docs.zoominfo.com/#cf83bb37-31cf-45d3-a276-08625ca04c60
 */
class ContactEnrich extends Api_1.default {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    /**
     * Use Contact Enrich to retrieve contact detail using valid query parameters.
     *
     * Note: You can input a maximum of 25 contacts in a single enrich request, returning the equivalent number of matching records
     *
     * To match a contact, you must use one of the following combinations of parameters to construct your input:
     *
     * 1. personId OR emailAddress OR hashedEmail OR phone AND companyId OR companyName
     * 2. firstName and lastName AND companyId OR companyName
     * 3. fullName AND companyId OR companyName
     *
     * @param params Array<IContactEnrichSearch>
     * @returns IContactEnrichResults
     */
    getContactEnrich(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                matchPersonInput: params,
                outputFields: interfaces_1.outputFields,
            };
            return this.post('/enrich/contact', data)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields you can use as input for the Contact Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getContactEnrichInputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/inputfields/contact/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields included in the response for the Contact Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getContantEnrichOutputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/outputfields/contact/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
}
exports.default = ContactEnrich;
//# sourceMappingURL=ContactEnrich.js.map