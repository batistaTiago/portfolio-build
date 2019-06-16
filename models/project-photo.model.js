"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var ProjectPhoto = sequelize.define('ProjectPhoto', {
        photoId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imageURL: {
            type: DataTypes.STRING(150),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        projectId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return ProjectPhoto;
}
exports.default = default_1;
