import { Router,Request,Response } from "express";
import QuestionController from "../controllers/Question.Controller";
export default class QuestionRouters{
    public router:Router;
    private questionController:QuestionController;
    constructor(){
        this.router = Router();
        this.questionController = new QuestionController();
        this.config();
    }
    private config():void{
        this.router.get('/:autentication',this.questionController.questions);
    }
}