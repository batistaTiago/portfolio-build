"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var api_1 = require("../api/api");
var config_1 = require("../config/env/config");
var server = http.createServer(api_1.default);
var config = config_1.EnvironmentConfig.getSettings();
var models = require('../models');
console.log('sincronizando sequelize');
models.sequelize.sync().then(function () {
    console.log('sinc deu certo');
    server.listen(config.serverPort);
    server.on('listening', function () {
        console.log("Server rodando na porta " + config.serverPort + "...");
    });
    server.on('error', function (error) {
        console.log('Houve um erro: ', error);
    });
});
