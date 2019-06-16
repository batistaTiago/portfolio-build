"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contact_controller_1 = require("./contact.controller");
var ContactRoutes = /** @class */ (function () {
    function ContactRoutes() {
        this.newContact = function (request, response) {
            contact_controller_1.ContactController.validate(request, response);
        };
    }
    return ContactRoutes;
}());
exports.ContactRoutes = ContactRoutes;
