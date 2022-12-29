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
const Api_1 = __importDefault(require("../../helpers/Api"));
/**
 * @class Usage
 * @docs https://api-docs.zoominfo.com/#df4f66e5-07dc-4449-9d83-b0c189d7d2be
 */
class Usage extends Api_1.default {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    /**
     * Retrieve current usage status using this endpoint.
     * @returns AxiosResponse['data']
     */
    getUsage() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/lookup/usage')
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
}
exports.default = Usage;
//# sourceMappingURL=Usage.js.map