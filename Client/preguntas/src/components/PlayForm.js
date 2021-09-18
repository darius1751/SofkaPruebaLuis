import React from 'react';
import { helpHttp } from '../helpers/helpHttp';
const PlayForm = ({user,setUser}) => {
    helpHttp().get('http://localhost:4000/questions/12345',{headers:{'Content-type':'Application/json'}}).then(value=>console.log(value));
    return (
        <div className='container'>
            <section className='question'>
                <article className='question-text'>
                </article>
                <div>
                    <input type='radio' name='answer'/><label>{}</label>
                    <br/>
                    <input type='radio' name='answer'/><label>{}</label>
                    <br/>
                    <input type='radio' name='answer'/><label>{}</label>
                    <br/>
                    <input type='radio' name='answer'/><label>{}</label>
                </div>
            </section>
        </div>
    );
}

export default PlayForm;
