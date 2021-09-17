import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = ({setUser}) => {
    const handleClick = (e)=>{
        setUser({
            nombre:null,
            id:0,
            autentication:12345
        })
    }
    return (
        <div className='nav nav-bar'>
            <NavLink to='' onClick={handleClick} className='a'>
                <div className='btn btn-nav'>
                    Inicio
                </div>
            </NavLink>
            <NavLink to='/jugar' onClick={handleClick} className='a'>
                <div className='btn btn-nav'>
                    Jugar
                </div>
            </NavLink>
        </div>
    );
}

export default Nav;
