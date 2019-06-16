"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_photo_controller_1 = require("./project-photo.controller");
var ProjectRoutes = /** @class */ (function () {
    function ProjectRoutes() {
        this.index = function (request, response) {
            return project_photo_controller_1.ProjectPhotoController.getAll(request, response);
        };
        this.create = function (request, response) {
            return project_photo_controller_1.ProjectPhotoController.createProjectPhoto(request, response);
        };
        this.findOne = function (request, response) {
            return project_photo_controller_1.ProjectPhotoController.getById(request, response);
        };
    }
    return ProjectRoutes;
}());
exports.ProjectRoutes = ProjectRoutes;
