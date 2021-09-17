import conexion from "../db/conexion";
import {Request,Response} from 'express';
import UserModel from "../models/User.model";
export default class UserController{
    public async login(req:Request,res:Response):Promise<any>{
        const {autentication,user,password} = req.body;
        const response = autentication === 12345? await (await conexion).query(`SELECT cl.id,name,max_points FROM client AS cl
        INNER JOIN users AS us 
        ON us.id = cl.users_id
        WHERE us.user_text = ? AND us.password_text = ?`,[user,password]) : {message:'No puedes pasar'};
        if(!response[0])
            res.send(response);
        else{
            const user:UserModel = {...response[0]}
            res.send(user);
        }
            
    }
    public async update(req:Request,res:Response):Promise<any>{
        //const response = await (await conexion).query('')
    }
}