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
 * @class Lookup
 * @docs https://api-docs.zoominfo.com/#28358f09-9863-42af-a93c-6710a8cacf9d
 */
class Lookup extends Api_1.default {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    /**
     * Retrieve accepted Company Ranking values
     * @returns AxiosResponse['data']
     */
    getCompanyRanking() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/companyranking`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Continent values
     * @returns AxiosResponse['data']
     */
    getContinent() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/continent`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Country values
     * @returns AxiosResponse['data']
     */
    getCountry() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/country`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted State values
     * @returns AxiosResponse['data']
     */
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/state`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Contact Departments values
     * @returns AxiosResponse['data']
     */
    getContactDepartments() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/department`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Employee Count values
     * @returns AxiosResponse['data']
     */
    getEmployeeCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/employeecount`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted SIC Codes values
     * @returns AxiosResponse['data']
     */
    getSICCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/siccode`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted NACIS Codes values
     * @returns AxiosResponse['data']
     */
    getNACISCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/naicscode`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Industry Codes values
     * @returns AxiosResponse['data']
     */
    getIndustryCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/industry`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Job Title Hierarchy values
     * @returns AxiosResponse['data']
     */
    getJobTitleHierarchy() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/jobtitlehierarchy`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Job Function values
     * @returns AxiosResponse['data']
     */
    getJobFunction() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/jobfunction`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Metro Area values
     * @returns AxiosResponse['data']
     */
    getMetroArea() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/metroarea`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Metro Area values
     * @returns AxiosResponse['data']
     */
    getRevenueRange() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/revenuerange`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Scoop Topic values
     * @returns AxiosResponse['data']
     */
    getScoopTopic() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/scooptopic`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Scoop Types values
     * @returns AxiosResponse['data']
     */
    getScoopTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/scooptype`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Scoop Department values
     * @returns AxiosResponse['data']
     */
    getScoopDepartment() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/scoopdepartment`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Company Type values
     * @returns AxiosResponse['data']
     */
    getCompanyType() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/companytype`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Board Member values
     * @returns AxiosResponse['data']
     */
    getBoardMembers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/boardMember`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Management Levels values
     * @returns AxiosResponse['data']
     */
    getManagementLevels() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/managementLevel`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Sub Unit Type values
     * @returns AxiosResponse['data']
     */
    getSubUnitType() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/subunittypes`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Tech Category values
     * @returns AxiosResponse['data']
     */
    getTechCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/tech/category`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Tech Vendor values
     * @returns AxiosResponse['data']
     */
    getTechVendor() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/tech/vendor`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Tech Product values
     * @returns AxiosResponse['data']
     */
    getTechProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/tech/product?vendor=microsoft corporation&parentCategory=Communication and Collaboration&category=Unified Communications`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Hash Tag values
     * @returns AxiosResponse['data']
     */
    getHashTag() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/hashtag?vendor=microsoft corporation&parentCategory=Communication and Collaboration&category=Unified Communications`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Intent Topic values
     * @returns AxiosResponse['data']
     */
    getIntentTopics() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/intent/topics`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted News Categories values
     * @returns AxiosResponse['data']
     */
    getNewsCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/news/categories`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Employee Category Band values
     * @returns AxiosResponse['data']
     */
    getEmployeeCategoryBand() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/employee-category-band`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Revenue Category Band values
     * @returns AxiosResponse['data']
     */
    getRevenueCategoryBand() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/revenue-category-band`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
    /**
     * Retrieve accepted Hierarchy Code values
     * @returns AxiosResponse['data']
     */
    getHierarchyCode() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/lookup/hierarchy-code`)
                .then((res) => res.data)
                .catch((err) => {
                throw err;
            });
        });
    }
}
exports.default = Lookup;
//# sourceMappingURL=Lookup.js.map