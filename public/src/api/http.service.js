"use strict";
exports.__esModule = true;
exports.HTTP = exports.PARAMETERS = void 0;
var axios_1 = require("axios");
var try_1 = require("./try");
var baseUrl = '';
var envApi = sessionStorage.getItem('api');
if (envApi)
    baseUrl = envApi.toString();
// console.log(baseUrl)
exports.PARAMETERS = {
    trackingCampaign: 'trackingCampaign',
    urlModalSession: 'urlModal',
    baseUrl: baseUrl
};
exports.HTTP = axios_1["default"].create({
    baseURL: exports.PARAMETERS.baseUrl
});
exports.HTTP.interceptors.response.use(function (response) { return response; }, function (error) {
    return (0, try_1.tryHttpRequest)(error);
});
