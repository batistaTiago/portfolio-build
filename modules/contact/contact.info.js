"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactInfo = /** @class */ (function () {
    function ContactInfo(_a) {
        var name = _a.name, email = _a.email, phoneNumber = _a.phoneNumber, subject = _a.subject, messageBody = _a.messageBody;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.subject = subject;
        this.messageBody = messageBody;
    }
    ContactInfo.prototype.isValid = function () {
        return (this.name &&
            this.email &&
            this.phoneNumber &&
            this.subject &&
            this.messageBody);
    };
    return ContactInfo;
}());
exports.ContactInfo = ContactInfo;
