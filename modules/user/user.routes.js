"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("./user.controller");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.index = function (request, response) {
            return user_controller_1.UserController.getAll(request, response);
        };
        this.create = function (request, response) {
            return user_controller_1.UserController.createUser(request, response);
        };
        this.findOne = function (request, response) {
            return user_controller_1.UserController.getById(request, response);
        };
        this.update = function (request, response) {
            return user_controller_1.UserController.updateUser(request, response);
        };
        this.delete = function (request, response) {
            return user_controller_1.UserController.deleteUser(request, response);
        };
    }
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
