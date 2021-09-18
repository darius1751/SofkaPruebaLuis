import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = ({user,setUser}) => {
    const handleClick = (e)=>{
        setUser({
            nombre:null,
            id:0,
            autentication:12345
        })
    }
    return (
        <div className='nav nav-bar'>
            <NavLink to={`/profile/${user.name.split(' ')[0]}`} className='a' activeClassName='active'>
                <div className='btn btn-nav'>
                    Inicio
                </div>
            </NavLink>
            <NavLink to='/play' className='a' activeClassName='active'>
                <div className='btn btn-nav'>
                    Jugar
                </div>
            </NavLink>
            
            <NavLink to='' onClick={handleClick} className='a floatr'  activeClassName='active'>
                <div className='btn btn-nav'>
                    Logout
                </div>
            </NavLink>
            
        </div>
    );
}

export default Nav;
