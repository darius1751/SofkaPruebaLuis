import React from 'react';
import Nav from '../components/Nav';
import PlayForm from '../components/PlayForm';

const Play = ({user,setUser}) => {
    return (
        <div>
            <Nav user={user} setUser={setUser}/>
            <PlayForm user={user} setUser={setUser}/>
        </div>
    );
}

export default Play;
