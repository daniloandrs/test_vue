"use strict";
exports.__esModule = true;
exports.SessionService = void 0;
var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    Object.defineProperty(SessionService, "userSession", {
        get: function () {
            var value = sessionStorage.getItem('userSession');
            if (value === null) {
                throw new Error('User session not found');
            }
            return SessionService._userSession || JSON.parse(value);
        },
        enumerable: false,
        configurable: true
    });
    return SessionService;
}());
exports.SessionService = SessionService;
