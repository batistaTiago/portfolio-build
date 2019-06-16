"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_routes_1 = require("../../modules/user/user.routes");
var project_routes_1 = require("../../modules/project/project.routes");
var auth_service_1 = require("../../modules/auth/auth.service");
var auth_1 = require("../../auth");
var contact_routes_1 = require("../../modules/contact/contact.routes");
var Routes = /** @class */ (function () {
    function Routes() {
        this.userRouter = new user_routes_1.UserRoutes();
        this.projectRouter = new project_routes_1.ProjectRoutes();
        this.contactRouter = new contact_routes_1.ContactRoutes();
    }
    Routes.prototype.initRoutes = function (app) {
        app.route('/').get(function (req, res) {
            res.send('<h1>Bem vindo à minha API!</h1>');
        });
        /* rotas de usuario */
        app.route('/api/users/create').post(this.userRouter.create);
        app.route('/api/users/all').get(this.userRouter.index);
        /* apenas um usuário logado pode acessar as rotas abaixo */
        // app.route('/api/users/all').all(AuthConfig.config().authenticate()).get(this.userRouter.index)
        app.route('/api/users/:id').all(auth_1.default.config().authenticate()).get(this.userRouter.findOne);
        app.route('/api/users/:id/update').all(auth_1.default.config().authenticate()).put(this.userRouter.update);
        app.route('/api/users/:id/delete').all(auth_1.default.config().authenticate()).delete(this.userRouter.findOne);
        /* rotas de projeto */
        app.route('/api/projects/all').get(this.projectRouter.index);
        app.route('/api/projects/all/:id').get(this.projectRouter.findOne);
        app.route('/api/projects/featured').get(this.projectRouter.findFeatured);
        app.route('/api/projects/minor').get(this.projectRouter.findMinor);
        /* rota de contato */
        app.route('/api/contact').post(this.contactRouter.newContact);
        /* rota de token de autenticação jwt */
        app.route('/token').post(auth_service_1.AuthService.authenticate);
    };
    return Routes;
}());
exports.default = new Routes();
