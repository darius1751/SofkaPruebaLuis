import conexion from "../db/conexion";
import {Request,Response} from 'express';
export default class CategoryController{
    public async categoryById(categoryId:Number):Promise<any>{
        const response =await (await conexion).query(`SELECT c.id,c.name FROM category AS c WHERE id = ?`,[categoryId]);
        return response[0];
    }
    public async update(req:Request,res:Response):Promise<any>{
        //const response = await (await conexion).query('')
    }
}