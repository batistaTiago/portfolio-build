"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectPhoto = /** @class */ (function () {
    function ProjectPhoto() {
    }
    ProjectPhoto.createProjectPhoto = function (_a) {
        var photoId = _a.photoId, photoURL = _a.photoURL;
        return { photoId: photoId, photoURL: photoURL };
    };
    ProjectPhoto.createProjectPhotos = function (data) {
        return data.map(ProjectPhoto.createProjectPhoto);
    };
    return ProjectPhoto;
}());
exports.ProjectPhoto = ProjectPhoto;
