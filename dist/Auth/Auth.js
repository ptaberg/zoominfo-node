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
const axios_1 = __importDefault(require("axios"));
const jsrsasign_1 = __importDefault(require("jsrsasign"));
const p_ratelimit_1 = require("p-ratelimit");
const ZoomInfoException_1 = __importDefault(require("../helpers/Exception/ZoomInfoException"));
/**
 * @class Auth
 * @docs https://api-docs.zoominfo.com/#78ab362c-ab1d-4541-9ad6-a257a370136d
 */
class Auth {
    /**
     * Get JWT Token via Basic Auth
     * Note: Access Token is valid for 1 hour
     * @param username
     * @param password
     * @returns JWT Token
     */
    static getBasicAuthToken(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.limit(() => __awaiter(this, void 0, void 0, function* () {
                return axios_1.default
                    .post(this.AuthURL, {
                    username,
                    password,
                })
                    .then((res) => res.data.jwt)
                    .catch((err) => {
                    if (err.response) {
                        throw new ZoomInfoException_1.default(err.response.status, err.response.data);
                    }
                    else
                        throw new ZoomInfoException_1.default(500, 'Internal Server Error');
                });
            }));
        });
    }
    /**
     * Get JWT Token via PKI
     * Note: Access Token is valid for 1 hour
     * @param username
     * @param clientId
     * @param privateKey
     * @returns JWT Token
     */
    static getPKIAuthToken(username, clientId, privateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const dtNow = new Date();
            const alg = 'RS256';
            const iss = 'zoominfo-node-sdk';
            const aud = 'enterprise_api';
            const header = {
                typ: 'JWT',
                alg,
            };
            const data = {
                aud,
                iss,
                username,
                client_id: clientId,
                iat: Auth.getIAT(dtNow),
                exp: Auth.getEXP(dtNow),
            };
            const sHeader = JSON.stringify(header);
            const sPayload = JSON.stringify(data);
            const clientJWT = jsrsasign_1.default.KJUR.jws.JWS.sign(alg, sHeader, sPayload, privateKey);
            return this.limit(() => __awaiter(this, void 0, void 0, function* () {
                return axios_1.default
                    .post(this.AuthURL, {}, {
                    headers: {
                        Authorization: `Bearer ${clientJWT}`,
                    },
                })
                    .then((res) => res.data.jwt)
                    .catch((err) => {
                    if (err.response) {
                        throw new ZoomInfoException_1.default(err.response.status, err.response.data);
                    }
                    else
                        throw new ZoomInfoException_1.default(500, 'Internal Server Error');
                });
            }));
        });
    }
    /**
     * Get Issued Time
     * @param dtNow
     * @returns
     */
    static getIAT(dtNow) {
        let iat = Math.floor(dtNow.getTime() / 1000);
        iat -= 60;
        return iat;
    }
    /**
     * Get Expiration Time
     * @param dtNow
     * @returns
     */
    static getEXP(dtNow) {
        let exp = Math.floor(dtNow.getTime() / 1000) + 5 * 60;
        exp -= 60;
        return exp;
    }
}
exports.default = Auth;
Auth.AuthURL = 'https://api.zoominfo.com/authenticate';
Auth.limit = (0, p_ratelimit_1.pRateLimit)({
    interval: 1000,
    rate: 1,
});
//# sourceMappingURL=Auth.js.map