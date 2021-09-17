"use strict";
exports.__esModule = true;
var express_1 = require("express");
var IndexRouters = /** @class */ (function () {
    function IndexRouters() {
        this.router = express_1.Router();
        this.router.get('/', function (req, res) {
            res.send({
                TOKEN: '12345',
                rutas: [
                    '/user',
                    '/user/:id',
                    '/user/login'
                ]
            });
        });
    }
    return IndexRouters;
}());
exports["default"] = IndexRouters;
