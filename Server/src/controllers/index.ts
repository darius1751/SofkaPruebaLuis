import {Application} from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as express from 'express';
import IndexRouters from '../routers/Index.Routers';
import UserRouters from '../routers/User.Routers';
import QuestionRouters from '../routers/Question.Routers';
class Server{
    private app:Application;
    constructor(){ 
        this.app = express();
        this.config();
    }
    private config():void{
        this.app.set('port',process.env.PORT || 4000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use('/',new IndexRouters().router);
        this.app.use('/user',new UserRouters().router);
        this.app.use('/questions',new QuestionRouters().router);
    }
    public init():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on Port',this.app.get('port'));
        })
    }
}
const server = new Server();
server.init();
