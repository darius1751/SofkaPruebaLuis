import { PoolCluster,Connection } from "promise-mysql";
import * as mysql from 'promise-mysql';
class Conexion{
    public async getConnection():Promise<Connection>{
        const pool = await mysql.createConnection({database:'sofka_prueba',host:'localhost',port:3306,timeout:3000,charset:'utf8',password:'',user:'root'});
        return pool;
    }
}
export default new Conexion().getConnection();