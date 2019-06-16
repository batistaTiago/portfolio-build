"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_controller_1 = require("./project.controller");
var ProjectRoutes = /** @class */ (function () {
    function ProjectRoutes() {
        this.index = function (request, response) {
            return project_controller_1.ProjectController.getAll(request, response);
        };
        // public create = (request: Express.Request, response: Express.Response) => { 
        //     return ProjectController.createProject(request, response)
        // }
        this.findOne = function (request, response) {
            return project_controller_1.ProjectController.getById(request, response);
        };
        this.findFeatured = function (request, response) {
            return project_controller_1.ProjectController.getFeatured(request, response);
        };
        this.findMinor = function (request, response) {
            return project_controller_1.ProjectController.getMinor(request, response);
        };
    }
    return ProjectRoutes;
}());
exports.ProjectRoutes = ProjectRoutes;
