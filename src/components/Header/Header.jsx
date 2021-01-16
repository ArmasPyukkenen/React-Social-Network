import React from 'react';
import s from './Header.module.css';
import logo from '../../resources/images/logo.jpg'

const Header = () => {
    return <header className={s.header}>
        <img src={logo} alt="test logo"></img>
    </header>
};

export default Header;