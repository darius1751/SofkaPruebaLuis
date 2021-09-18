"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Question_Controller_1 = require("../controllers/Question.Controller");
var QuestionRouters = /** @class */ (function () {
    function QuestionRouters() {
        this.router = express_1.Router();
        this.questionController = new Question_Controller_1["default"]();
        this.config();
    }
    QuestionRouters.prototype.config = function () {
        this.router.get('/:autentication', this.questionController.questions);
    };
    return QuestionRouters;
}());
exports["default"] = QuestionRouters;
