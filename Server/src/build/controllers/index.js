"use strict";
exports.__esModule = true;
var cors = require("cors");
var morgan = require("morgan");
var express = require("express");
var Index_Routers_1 = require("../routers/Index.Routers");
var User_Routers_1 = require("../routers/User.Routers");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use('/', new Index_Routers_1["default"]().router);
        this.app.use('/user', new User_Routers_1["default"]().router);
    };
    Server.prototype.init = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('Server on Port', _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.init();
