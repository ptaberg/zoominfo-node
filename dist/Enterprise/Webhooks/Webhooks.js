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
 * @class Webhooks
 * @docs https://api-docs.zoominfo.com/#7f6542bf-1a97-4402-b05d-71b16c1e2916
 */
class Webhooks extends Api_1.default {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    /**
     * Use this endpoint to create a webhook.
     * @param params IWebhookCreateParams
     * @returns IWebhookResults
     */
    createWebhook(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post('/webhooks', params)
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
     * Use this endpoint to update a webhook.
     * @param id string
     * @param params IWebhookUpdateParams
     * @returns IWebhookResults
     */
    updateWebhook(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.put(`/webhooks/${id}`, params)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Use this endpoint to delete a webhook.
     * @param id string
     * @returns IWebhookResults
     */
    deleteWebhook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delete(`/webhooks/${id}`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Use this endpoint to get a specific webhook.
     * @param id
     * @returns IWebhookResults
     */
    getWebhook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/webhooks/${id}`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Use this endpoint to get all webhook.ß
     * @returns
     */
    getAllWebhook() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/webhooks`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Use this endpoint to validate a webhook.
     * @param params IWebhookValidateParams
     * @returns IWebhookValidateResults
     */
    validateTargetURL(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post('/webhooks/validate', params)
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
     * Use this endpoint to get a webhook verification token.
     * @param id string
     * @returns IWebhookVerificationResult
     */
    generateVerificationToken(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post(`/webhooks/${id}/token`, {})
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
     * Use this endpoint to get a webhook subscription types.
     * @returns IWebhookSubscriptionResult
     */
    getSubscriptionTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/webhooks/subscriptiontypes')
                .then((res) => {
                const { data } = res;
                return data;
            })
                .catch((err) => {
                throw err;
            });
        });
    }
}
exports.default = Webhooks;
//# sourceMappingURL=Webhooks.js.map