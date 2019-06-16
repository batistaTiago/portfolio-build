"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    User.createUser = function (_a) {
        var id = _a.id, name = _a.name, email = _a.email, password = _a.password;
        return { id: id, name: name, email: email, password: password };
    };
    User.createUsers = function (data) {
        return data.map(User.createUser);
    };
    User.createWithId = function (_a) {
        var id = _a.id, name = _a.name, email = _a.email, password = _a.password;
        return { id: id, name: name, email: email, password: password };
    };
    User.createWithEmail = function (_a) {
        var id = _a.id, name = _a.name, email = _a.email, password = _a.password;
        return { id: id, name: name, email: email, password: password };
    };
    return User;
}());
exports.User = User;
