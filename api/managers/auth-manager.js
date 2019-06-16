"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var BCrypt = require("bcryptjs");
var JWT = require("jwt-simple");
var config_1 = require("../../config/env/config");
var response_manager_1 = require("./response-manager");
var AuthManager = /** @class */ (function () {
    function AuthManager() {
    }
    AuthManager.authenticate = function (res, credentials, data) {
        var passwordsMatch = BCrypt.compareSync(credentials.password, data.password);
        if (passwordsMatch) {
            var payload = { id: data.id };
            response_manager_1.ResponseManager.success(res, JWT.encode(payload, config_1.EnvironmentConfig.getSettings().secret));
        }
        else {
            res.sendStatus(HTTPStatus.UNAUTHORIZED);
        }
    };
    return AuthManager;
}());
exports.AuthManager = AuthManager;
