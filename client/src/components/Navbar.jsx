import React from 'react';
import "../component_css/Navbar.css"
import { NavLink } from "react-router-dom";
import useAuth from '../store/Store.jsx';




function Navbar() {
    const { token } = useAuth();
    let isLogin = token ? true : false;
    console.log("isLogin", isLogin);
    return (
        <>

            <div className='nav'>
                <NavLink to="/" className='nav_logo'>GAGANJOT SINGH</NavLink>
                <ul className='nav_iteams'>
                    <li ><NavLink to="/home" className='nav_list'>Home</NavLink></li>
                    <li ><NavLink to="/about" className='nav_list'>About</NavLink></li>
                    <li ><NavLink to="/contact" className='nav_list'>Contact</NavLink></li>
                    <li ><NavLink to="/services" className='nav_list'>Services</NavLink></li>

                    {isLogin ? <li><NavLink to="/Logout" className='nav_list'>Logout</NavLink></li> :
                  <>
                    <li ><NavLink to="/login" className='nav_list'>Login</NavLink></li>
                    <li ><NavLink to="/register" className='nav_list'>Register</NavLink></li>
                  </>
                    }






                </ul>
            </div>

        </>
    )
}

export default Navbar