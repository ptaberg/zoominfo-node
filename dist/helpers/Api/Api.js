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
const p_ratelimit_1 = require("p-ratelimit");
const ZoomInfoException_1 = __importDefault(require("../Exception/ZoomInfoException"));
class Api {
    constructor(accessToken) {
        this.apiURL = 'https://api.zoominfo.com';
        this.accessToken = accessToken;
        this.limit = (0, p_ratelimit_1.pRateLimit)({
            interval: 1000,
            rate: 25,
            concurrency: 25,
        });
    }
    /**
     * GET request from ZoomInfo API
     * @param endpoint
     * @returns AxiosRespone
     */
    get(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.limit(() => __awaiter(this, void 0, void 0, function* () {
                return axios_1.default
                    .get(`${this.apiURL}${endpoint}`, {
                    headers: { Authorization: `Bearer ${this.accessToken}` },
                })
                    .then((res) => res)
                    .catch((err) => {
                    if (err.response) {
                        const errorStatus = err.response.status;
                        throw new ZoomInfoException_1.default(errorStatus, err.message, err.response.data);
                    }
                    else
                        throw new ZoomInfoException_1.default(500, err.message);
                });
            }));
        });
    }
    /**
     * POST request from ZoomInfo API
     * @param endpoint
     * @param data
     * @returns AxiosRespone
     */
    post(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.limit(() => __awaiter(this, void 0, void 0, function* () {
                return axios_1.default
                    .post(`${this.apiURL}${endpoint}`, data, {
                    headers: { Authorization: `Bearer ${this.accessToken}` },
                })
                    .then((res) => res)
                    .catch((err) => {
                    if (err.response) {
                        const errorStatus = err.response.status;
                        throw new ZoomInfoException_1.default(errorStatus, err.message, err.response.data);
                    }
                    else
                        throw new ZoomInfoException_1.default(500, err.message);
                });
            }));
        });
    }
    /**
     * PUT request from ZoomInfo API
     * @param endpoint
     * @param data
     * @returns AxiosResponse
     */
    put(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.limit(() => __awaiter(this, void 0, void 0, function* () {
                return axios_1.default
                    .put(`${this.apiURL}${endpoint}`, data, {
                    headers: { Authorization: `Bearer ${this.accessToken}` },
                })
                    .then((res) => res)
                    .catch((err) => {
                    if (err.response) {
                        const errorStatus = err.response.status;
                        throw new ZoomInfoException_1.default(errorStatus, err.message, err.response.data);
                    }
                    else
                        throw new ZoomInfoException_1.default(500, err.message);
                });
            }));
        });
    }
    /**
     * DELETE request from ZoomInfo API
     * @param endpoint
     * @returns AxiosRespone
     */
    delete(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.limit(() => __awaiter(this, void 0, void 0, function* () {
                return axios_1.default
                    .delete(`${this.apiURL}${endpoint}`, {
                    headers: { Authorization: `Bearer ${this.accessToken}` },
                })
                    .then((res) => res)
                    .catch((err) => {
                    if (err.response) {
                        const errorStatus = err.response.status;
                        throw new ZoomInfoException_1.default(errorStatus, err.message, err.response.data);
                    }
                    else
                        throw new ZoomInfoException_1.default(500, err.message);
                });
            }));
        });
    }
}
exports.default = Api;
//# sourceMappingURL=Api.js.map