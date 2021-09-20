import React,{useEffect,useState} from 'react';
import Nav from '../components/Nav';
import PlayForm from '../components/PlayForm';
import { helpHttp } from '../helpers/helpHttp';
const Play = ({user,setUser}) => {
    const [question, setQuestion] = useState([]);
    const ENDPOINT = 'http://localhost:4000/questions/12345';
    let max = 4;
    useEffect(() => {
        const get = ()=>{
            helpHttp().get(ENDPOINT,{headers:{'Content-type':'Application/json'}}).then(
                value=>setQuestion(value)
            );
        }   
        get();
        return () => {
            
        };
    }, [ENDPOINT]);
    const generateQuestion = (max)=>{
        return Math.floor(Math.random() * max);
    };
    const questionData = question[generateQuestion(4)];
    return (
        <div>
            <Nav user={user} setUser={setUser}/>
            <PlayForm user={user} setUser={setUser} question={questionData} max={max}/>
        </div>
    );
}

export default Play;
