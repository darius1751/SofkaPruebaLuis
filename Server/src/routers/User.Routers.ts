import { Router,Request,Response } from "express";
import UserController from "../controllers/User.Controller";
export default class UserRouters{
    public router:Router;
    private userController:UserController;
    constructor(){
        this.router = Router();
        this.userController = new UserController();
        this.config();
    }
    private config():void{
        this.router.post('/login',this.userController.login);
    }
}