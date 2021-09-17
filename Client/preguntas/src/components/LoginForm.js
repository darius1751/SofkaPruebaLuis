import React,{useState} from 'react';
import { helpHttp } from '../helpers/helpHttp';
const initialData = {
    user:'',
    password:'',
    autentication:12345
  };
const LoginForm = ({user,setUser}) => {
    const [data, setData] = useState(initialData);
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        helpHttp().post('http://localhost:4000/user/login',{headers:{'Content-Type':'Application/json'},body:data})
        .then(value=>{
           if(value.id)
                setUser(value);
        });
    }
    return (
        <div className='col-12'>
            <form className='login' onSubmit={handleSubmit}>
                <input type='text' name='user' placeholder='Ingrese su usuario' onChange={handleChange} value={data.user} className='login-text'/>
                <br/>
                <input type='password' name='password' placeholder='Ingrese su contraseña' onChange={handleChange} value={data.password} className='login-text'/>
                <br/>
                <input type='submit' value='Iniciar Session' className='btn  btn-init'/>
            </form>    
        </div>
    );
}

export default LoginForm;
