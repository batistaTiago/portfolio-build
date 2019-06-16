"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BCrypt = require("bcryptjs");
function default_1(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }
    });
    User.beforeCreate(function (user) {
        return hashPassword(user);
    });
    User.beforeUpdate(function (user) {
        return hashPassword(user);
    });
    function hashPassword(user) {
        var salt = BCrypt.genSaltSync(10);
        user.set('password', BCrypt.hashSync(user.password, salt));
    }
    return User;
}
exports.default = default_1;
// export class User {
//     constructor(sequelize, DataTypes) {
//         sequelize.define('User', {
//             id: {
//                 type: DataTypes.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true
//             },
//             name: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     notEmpty: true,
//                 }
//             },
//             email: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     notEmpty: true,
//                 }
//             },
//             password: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     notEmpty: true,
//                 }
//             }
//         })
//     }
// }
