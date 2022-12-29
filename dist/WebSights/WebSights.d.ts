import IPEnrich from './IPEnrich';
/**
 * @class WebSights
 * @docs https://api-docs.zoominfo.com/#7f6542bf-1a97-4402-b05d-71b16c1e2916
 */
export default class WebSights {
    protected accessToken: string;
    IPenrich: IPEnrich;
    constructor(accessToken: string);
}
