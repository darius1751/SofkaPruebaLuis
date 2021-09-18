"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var conexion_1 = require("../db/conexion");
var Category_Controller_1 = require("./Category.Controller");
var Answer_Controller_1 = require("./Answer.Controller");
var QuestionController = /** @class */ (function () {
    function QuestionController() {
    }
    QuestionController.prototype.questions = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var autentication, response, _a, categoryController, answerController, _i, response_1, response1, category, answer, questions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        autentication = req.params.autentication;
                        if (!(autentication == '12345')) return [3 /*break*/, 3];
                        return [4 /*yield*/, conexion_1["default"]];
                    case 1: return [4 /*yield*/, (_b.sent()).query("SELECT q.id, q.question_text,q.category_id FROM question AS q")];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = { message: 'No puedes pasar' };
                        _b.label = 4;
                    case 4:
                        response = _a;
                        if (!!response[0]) return [3 /*break*/, 5];
                        res.send(response);
                        return [3 /*break*/, 11];
                    case 5:
                        categoryController = new Category_Controller_1["default"]();
                        answerController = new Answer_Controller_1["default"]();
                        _i = 0, response_1 = response;
                        _b.label = 6;
                    case 6:
                        if (!(_i < response_1.length)) return [3 /*break*/, 10];
                        response1 = response_1[_i];
                        return [4 /*yield*/, categoryController.categoryById(response1.category_id)];
                    case 7:
                        category = _b.sent();
                        response1.category = category;
                        return [4 /*yield*/, answerController.answerByQuestionId(response1.id)];
                    case 8:
                        answer = _b.sent();
                        response1.answers = answer;
                        delete response1.category_id;
                        _b.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 6];
                    case 10:
                        questions = __spreadArray([], response);
                        res.send(questions);
                        _b.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return QuestionController;
}());
exports["default"] = QuestionController;
