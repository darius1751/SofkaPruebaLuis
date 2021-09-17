"use strict";
exports.__esModule = true;
var express_1 = require("express");
var User_Controller_1 = require("../controllers/User.Controller");
var UserRouters = /** @class */ (function () {
    function UserRouters() {
        this.router = express_1.Router();
        this.userController = new User_Controller_1["default"]();
        this.config();
    }
    UserRouters.prototype.config = function () {
        this.router.post('/login', this.userController.login);
    };
    return UserRouters;
}());
exports["default"] = UserRouters;
