import conexion from "../db/conexion";
import {Request,Response} from 'express';
import CategoryController from "./Category.Controller";
import CategoryModel from "../models/Category.model";
import AnswerController from "./Answer.Controller";
export default class QuestionController{
    
    public async questions(req:Request,res:Response):Promise<any>{
        const {autentication} = req.params;
        const response = autentication == '12345'? await (await conexion).query(`SELECT q.id, q.question_text,q.category_id FROM question AS q`) : {message:'No puedes pasar'};
        if(!response[0])
            res.send(response);
        else{
            const categoryController = new CategoryController();
            const answerController = new AnswerController();
            for(let response1 of response){
                const category:CategoryModel = await categoryController.categoryById(response1.category_id);
                response1.category = category;
                response1.answers = await answerController.answerByQuestionId(response1.id);
                delete response1.category_id;
            }   
            res.send(response);
        }
            
    }
}