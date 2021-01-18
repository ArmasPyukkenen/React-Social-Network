import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to={`/profile/${props.userId}`} activeClassName={s.active}>My page</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></div>
            <div className={s.item}><NavLink to="#" activeClassName={s.active}>Music</NavLink></div>
        </nav>
    )
};

export default Nav;