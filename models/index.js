"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config/env/config");
'use strict';
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var config = config_1.EnvironmentConfig.getSettings();
var env = config.env || 'development';
var extension = (env === 'development') ? '.ts' : '.js';
var db = {};
var modelRelations = require('./relations/relations');
var sequelize;
if (config.dbURL) {
    sequelize = new Sequelize(config.dbURL);
}
else {
    sequelize = new Sequelize(config.db, config.username, config.password, config);
}
fs
    .readdirSync(__dirname)
    .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === extension);
})
    .forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
modelRelations(db);
module.exports = db;
