import { AxiosResponse } from 'axios';
import Api from '../../../helpers/Api';
import { IHashTagEnrich, IHashTagEnrichResults } from './interfaces';
/**
 * @class HashTagsEnrich
 * @docs https://api-docs.zoominfo.com/#f3f56720-bcc9-4d8d-9834-7f0588c1417e
 */
export default class HashtagsEnrich extends Api {
    protected accessToken: string;
    constructor(accessToken: string);
    /**
     * Use this endpoint to match Hash Tag information
     * @param params IHashTagEnrich
     * @returns IHashTagEnrichResults
     */
    getHashtagsEnrich(params: IHashTagEnrich): Promise<IHashTagEnrichResults>;
    /**
     * Returns a list of fields you can use as input for the Hash Tags Enrich endpoint.
     * @returns AxiosResponse['data']
     */
    getHashtagsEnrichInputs(): Promise<AxiosResponse['data']>;
}
