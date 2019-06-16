"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = /** @class */ (function () {
    function Project() {
    }
    Project.createProject = function (_a) {
        var projectId = _a.projectId, titulo = _a.titulo, gitURL = _a.gitURL, photos = _a.photos, status = _a.status, destaque = _a.destaque, descricao = _a.descricao, deployURL = _a.deployURL, percentageComplete = _a.percentageComplete;
        return { projectId: projectId, titulo: titulo, gitURL: gitURL, photos: photos, status: status, destaque: destaque, descricao: descricao, deployURL: deployURL, percentageComplete: percentageComplete };
    };
    Project.createProjects = function (data) {
        return data.map(Project.createProject);
    };
    return Project;
}());
exports.Project = Project;
