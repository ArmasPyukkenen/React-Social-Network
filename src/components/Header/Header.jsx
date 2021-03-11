import React from 'react';
import s from './Header.module.css';
import logo from '../../resources/images/logo.jpg'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logoArea}>
            <img src={logo} alt="test logo"></img>
            <h1>Adventure hike</h1>
        </div>
        <div>
            {props.isAuth? 
                props.login:
                <NavLink to="/login">Login</NavLink>}
        </div>
    </header>
};

export default Header;