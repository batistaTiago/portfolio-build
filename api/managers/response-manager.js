"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var ResponseManager = /** @class */ (function () {
    function ResponseManager() {
    }
    ResponseManager.success = function (res, data) {
        res.status(HTTPStatus.OK).json({ payload: data });
    };
    ResponseManager.error = function (res, error, message) {
        console.log('Ocorreu um erro: ' + error);
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
    };
    return ResponseManager;
}());
exports.ResponseManager = ResponseManager;
