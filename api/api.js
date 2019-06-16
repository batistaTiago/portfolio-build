"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var BodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var auth_1 = require("../auth");
var cors = require("cors");
var Api = /** @class */ (function () {
    function Api(express) {
        this.express = express;
        this.middleWare();
    }
    Api.errorHandler = function (err, req, res, next) {
        console.log('API error handler foi executado', err);
        res.status(500).json({
            errorCode: '0',
            message: 'Internal server error'
        });
    };
    Api.prototype.middleWare = function () {
        this.express.use(BodyParser.urlencoded({ extended: true }));
        this.express.use(BodyParser.json());
        this.express.use(Api.errorHandler);
        this.express.use(cors());
        this.express.use(auth_1.default.config().initialize());
        this.router(this.express);
    };
    Api.prototype.router = function (application) {
        routes_1.default.initRoutes(application);
    };
    return Api;
}());
exports.default = new Api(Express()).express;
