"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IPEnrich_1 = __importDefault(require("./IPEnrich"));
/**
 * @class WebSights
 * @docs https://api-docs.zoominfo.com/#7f6542bf-1a97-4402-b05d-71b16c1e2916
 */
class WebSights {
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.IPenrich = new IPEnrich_1.default(accessToken);
    }
}
exports.default = WebSights;
//# sourceMappingURL=WebSights.js.map