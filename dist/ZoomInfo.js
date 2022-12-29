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
const Auth_1 = __importDefault(require("./Auth"));
const Enrich_1 = __importDefault(require("./Enterprise/Enrich"));
const Lookup_1 = __importDefault(require("./Enterprise/Lookup"));
const Search_1 = __importDefault(require("./Enterprise/Search"));
const Usage_1 = __importDefault(require("./Enterprise/Usage"));
const Webhooks_1 = __importDefault(require("./Enterprise/Webhooks"));
const WebSights_1 = __importDefault(require("./WebSights"));
const Compliance_1 = __importDefault(require("./Compliance"));
/**
 * @class ZoomInfo
 */
class ZoomInfo {
    constructor(config, accessToken) {
        this.config = config;
        this.accessToken = accessToken;
        this.compliance = new Compliance_1.default(this.accessToken);
        this.enrich = new Enrich_1.default(this.accessToken);
        this.lookup = new Lookup_1.default(this.accessToken);
        this.search = new Search_1.default(this.accessToken);
        this.usage = new Usage_1.default(this.accessToken);
        this.webhooks = new Webhooks_1.default(this.accessToken);
        this.websights = new WebSights_1.default(this.accessToken);
    }
    /**
     * Create ZoomInfo client
     * @param credentials
     * @returns
     */
    static client(config) {
        return __awaiter(this, void 0, void 0, function* () {
            const accessToken = yield ZoomInfo.fetchAccessToken(config);
            const Zoom = new ZoomInfo(config, accessToken);
            return Zoom;
        });
    }
    /**
     * Refreshes the current access token
     * @returns accessToken
     */
    refreshAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return ZoomInfo.fetchAccessToken(this.config);
        });
    }
    /**
     * Fetch access token using Auth API
     * @param config
     * @returns accessToken
     */
    static fetchAccessToken(config) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password, clientId, privateKey } = config;
            if (username && password) {
                const accessToken = yield Auth_1.default.getBasicAuthToken(username, password)
                    .then((token) => token)
                    .catch((err) => {
                    throw err;
                });
                return accessToken;
            }
            if (username && clientId && privateKey) {
                const accessToken = yield Auth_1.default.getPKIAuthToken(username, clientId, privateKey)
                    .then((token) => token)
                    .catch((err) => {
                    throw err;
                });
                return accessToken;
            }
            throw new Error('Malformed client credentials configuration');
        });
    }
}
exports.default = ZoomInfo;
//# sourceMappingURL=ZoomInfo.js.map