import React,{useState} from 'react';
const PlayForm = ({user,setUser,question}) => {
    const [response,setResponse] = useState(null);
    const [questionData, setQuestionData] = useState(question);
    console.log(question);
    const handleClick = (response)=>{
        let responseTrue = null;
        console.log(response);
        questionData.answers.forEach((value)=>{
            if(!responseTrue)
                responseTrue = value.point === 100?value.id : null;
        });
        console.log(responseTrue);
        if(responseTrue === Number(response)){
            alert('Estas en lo correcto');
            if(user.max_points<100){
                alert('Nuevo Record');
                
            }
        }
        else
            alert('Has fallado :( ');
    }
    const handleChange = (e)=>{
        setResponse(e.target.value);
    }
    //console.log(questionData);
    return (
        <div className='container-profile'>
            <section className='question'>
                <article className='question-text'>
                    {questionData?.question_text}
                </article>
                <div>
                    <input type='radio' name='answer' value={questionData?.answers[0]?.id} onClick={handleChange}/><label>{questionData?.answers[0]?.answer_text}</label>
                    <br/>
                    <input type='radio' name='answer' value={questionData?.answers[1]?.id} onClick={handleChange}/><label>{questionData?.answers[1]?.answer_text}</label>
                    <br/>
                    <input type='radio' name='answer' value={questionData?.answers[2]?.id} onClick={handleChange}/><label>{questionData?.answers[2]?.answer_text}</label>
                    <br/>
                    <input type='radio' name='answer' value={questionData?.answers[3]?.id} onClick={handleChange}/><label>{questionData?.answers[3]?.answer_text}</label>
                </div>
            </section>
            <button onClick={(e)=>handleClick(response)} className='btn btn-init  floatr' disabled={!response}>Siguiente</button>
        </div>
    );
}

export default PlayForm;
