import Enrich from './Enterprise/Enrich';
import Lookup from './Enterprise/Lookup';
import Search from './Enterprise/Search';
import Usage from './Enterprise/Usage';
import Webhooks from './Enterprise/Webhooks';
import WebSights from './WebSights';
import Compliance from './Compliance';
export interface IClientConfig {
    username: string;
    password?: string;
    clientId?: string;
    privateKey?: string;
}
/**
 * @class ZoomInfo
 */
export default class ZoomInfo {
    private accessToken;
    private config;
    compliance: Compliance;
    enrich: Enrich;
    lookup: Lookup;
    search: Search;
    usage: Usage;
    webhooks: Webhooks;
    websights: WebSights;
    constructor(config: IClientConfig, accessToken: string);
    /**
     * Create ZoomInfo client
     * @param credentials
     * @returns
     */
    static client(config: IClientConfig): Promise<ZoomInfo>;
    /**
     * Refreshes the current access token
     * @returns accessToken
     */
    refreshAccessToken(): Promise<string>;
    /**
     * Fetch access token using Auth API
     * @param config
     * @returns accessToken
     */
    private static fetchAccessToken;
}
