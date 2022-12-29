/**
 * @class Auth
 * @docs https://api-docs.zoominfo.com/#78ab362c-ab1d-4541-9ad6-a257a370136d
 */
export default class Auth {
    private static AuthURL;
    private static limit;
    /**
     * Get JWT Token via Basic Auth
     * Note: Access Token is valid for 1 hour
     * @param username
     * @param password
     * @returns JWT Token
     */
    static getBasicAuthToken(username: string, password: string): Promise<string>;
    /**
     * Get JWT Token via PKI
     * Note: Access Token is valid for 1 hour
     * @param username
     * @param clientId
     * @param privateKey
     * @returns JWT Token
     */
    static getPKIAuthToken(username: string, clientId: string, privateKey: string): Promise<string>;
    /**
     * Get Issued Time
     * @param dtNow
     * @returns
     */
    static getIAT(dtNow: Date): number;
    /**
     * Get Expiration Time
     * @param dtNow
     * @returns
     */
    static getEXP(dtNow: Date): number;
}
