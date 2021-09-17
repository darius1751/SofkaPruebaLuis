import { Router } from 'express';
export default class IndexRouters{
    public router:Router;
    constructor(){
        this.router = Router();
        this.router.get('/',(req:any,res:any)=>{
            res.send({
                TOKEN:'12345',
                rutas:[
                    '/user',
                    '/user/:id',
                    '/user/login'
                ]
            });
        });
    }
}