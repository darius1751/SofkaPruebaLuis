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
            <Nav setUser={setUser}/>
            <h2>Profile</h2> 
            <div>

            </div>
        </div>
    );
}
export default Profile;