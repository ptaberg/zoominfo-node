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
const Api_1 = __importDefault(require("../helpers/Api"));
/**
 * @class Compliance
 * @docs https://api-docs.zoominfo.com/#6b305a99-cbad-4a44-aaa4-23b14d126a43
 */
class Compliance extends Api_1.default {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    /**
     * Returns a list of compliance-related details from ZoomInfo's data
     * @param params IComplianceParams
     * @returns IComplianceResult
     */
    compliance(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post('/compliance', params)
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
     * Returns a list of fields you can use as input for the Compliance endpoint.
     * @returns AxiosResponse['data']
     */
    complianceInputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/inputfields/compliance/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Returns a list of fields included in the response for the Compliance endpoint.
     * @returns AxiosResponse['data']
     */
    compliancehOutputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/outputfields/compliance/enrich')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
}
exports.default = Compliance;
//# sourceMappingURL=Compliance.js.map