import conexion from "../db/conexion";
import {Request,Response} from 'express';
import CategoryController from "./Category.Controller";
import CategoryModel from "../models/Category.model";
export default class AnswerController{
    
    public async answerByQuestionId(question_id:Number):Promise<any>{
        const response = await (await conexion).query(`SELECT a.id, a.answer_text,a.point FROM answer AS a WHERE a.question_id = ?`,[question_id]);
        return response;
    }
}