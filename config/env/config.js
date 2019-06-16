"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnvironmentConfig = /** @class */ (function () {
    function EnvironmentConfig() {
    }
    EnvironmentConfig.getSettings = function () {
        var env = (process.env.NODE_ENV || 'development').toLowerCase();
        if (env === 'development') {
            return EnvironmentConfig.devConfig;
        }
        else if (env === 'production') {
            console.log(EnvironmentConfig.productionConfig);
            return EnvironmentConfig.productionConfig;
        }
        else if (env === 'test') {
            return EnvironmentConfig.testConfig;
        }
    };
    EnvironmentConfig.devConfig = {
        env: 'development',
        serverPort: 3000,
        db: 'db_portfolio',
        username: 'root',
        password: '',
        dbURL: 'mysql://root@localhost:3306/db_portfolio',
        host: 'localhost',
        databasePort: 3306,
        secret: '53cr3t'
    };
    EnvironmentConfig.productionConfig = require('./production.env');
    EnvironmentConfig.testConfig = {
        env: 'test',
        db: 'db_portfolio_test',
        serverPort: 3000,
        username: 'root',
        password: '',
        dbURL: 'mysql://root@localhost:3306/db_portfolio',
        host: 'localhost',
        databasePort: 3306,
        secret: '53cr3t'
    };
    return EnvironmentConfig;
}());
exports.EnvironmentConfig = EnvironmentConfig;
