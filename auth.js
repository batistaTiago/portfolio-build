"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Passport = require("passport");
var passport_jwt_1 = require("passport-jwt");
var user_service_1 = require("./modules/user/user.service");
var config_1 = require("./config/env/config");
var AuthConfig = /** @class */ (function () {
    function AuthConfig() {
    }
    AuthConfig.config = function () {
        var options = {
            secretOrKey: config_1.EnvironmentConfig.getSettings().secret,
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderWithScheme('JWT')
        };
        Passport.use(new passport_jwt_1.Strategy(options, function (jwtPayload, done) {
            user_service_1.UserService.getById(jwtPayload.id)
                .then(function (user) {
                if (user) {
                    return done(null, {
                        id: user.id,
                        email: user.email,
                    });
                }
                return done(null, false);
            })
                .catch(function (err) {
                return done(err, null);
            });
        }));
        return {
            initialize: function () {
                return Passport.initialize();
            },
            authenticate: function () {
                return Passport.authenticate('jwt', { session: false });
            }
        };
    };
    return AuthConfig;
}());
exports.default = AuthConfig;
