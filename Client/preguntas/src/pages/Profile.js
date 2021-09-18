import React,{useEffect} from 'react';
import {useParams, useHistory} from 'react-router';
import Nav from '../components/Nav';
const Profile = ({user,setUser})=>{
    const {name} = useParams();
    const history = useHistory();
    useEffect(() => {
        if(name !== user.name.split(' ')[0]){
            history.push('/');
        }
        return () => {
            
        };
    }, [user,name,history]);
    return (
        <div>
            <Nav setUser={setUser} user={user}/>
            <h2>Bienvenido {user.name}</h2>
            <section>
                <p>Este es un juego modo Quiz, el cual tiene 5 categorias</p>
                <p>5 Preguntas por Categoria</p>
                <p>Tiene 5 rondas, 1 pregunta por categoria</p>
                <ol>
                    <li>Matematicas</li>
                    <li>Programacion</li>
                    <li>Sociales</li>
                    <li>Espa&ntilde;ol</li>
                    <li>Entretenimiento</li>
                </ol>
                <p>Para iniciar el juego de Click en la barra de navegacion <strong>Jugar</strong></p>
            </section>
        </div>
    );
}
export default Profile;