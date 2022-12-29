import Api from '../../helpers/Api';
import { IWebhookCreateParams, IWebhookResults, IWebhookValidateParams } from './interfaces';
/**
 * @class Webhooks
 * @docs https://api-docs.zoominfo.com/#7f6542bf-1a97-4402-b05d-71b16c1e2916
 */
export default class Webhooks extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use this endpoint to create a webhook.
     * @param params IWebhookCreateParams
     * @returns IWebhookResults
     */
    createWebhook(params: IWebhookCreateParams): Promise<IWebhookResults>;
    /**
     * Use this endpoint to update a webhook.
     * @param id string
     * @param params IWebhookUpdateParams
     * @returns IWebhookResults
     */
    updateWebhook(id: string, params: IWebhookCreateParams): Promise<IWebhookResults>;
    /**
     * Use this endpoint to delete a webhook.
     * @param id string
     * @returns IWebhookResults
     */
    deleteWebhook(id: string): Promise<IWebhookResults>;
    /**
     * Use this endpoint to get a specific webhook.
     * @param id
     * @returns IWebhookResults
     */
    getWebhook(id: string): Promise<IWebhookResults>;
    /**
     * Use this endpoint to get all webhook.ß
     * @returns
     */
    getAllWebhook(): Promise<any>;
    /**
     * Use this endpoint to validate a webhook.
     * @param params IWebhookValidateParams
     * @returns IWebhookValidateResults
     */
    validateTargetURL(params: IWebhookValidateParams): Promise<any>;
    /**
     * Use this endpoint to get a webhook verification token.
     * @param id string
     * @returns IWebhookVerificationResult
     */
    generateVerificationToken(id: string): Promise<any>;
    /**
     * Use this endpoint to get a webhook subscription types.
     * @returns IWebhookSubscriptionResult
     */
    getSubscriptionTypes(): Promise<any>;
}
