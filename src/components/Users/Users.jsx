import React from 'react';
import defaultAvatar from '../../resources/images/defaultavatar.png';
import classes from './Users.module.css';
import Loader from '../common/Loader/Loader';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    const {pageCount, currentPage} = props;

    const createPagination = (from, to) => {
        const result = [];
        for(let i = from; i <= to; i++){
            result.push(
            <button 
                key={i}
                className={classes.setPageBtn + (currentPage === i ? ' ' + classes.active : '')}
                onClick={() => props.handleSetCurrentPage(i)} 
                value={i}>
                {i}
            </button>
            )
        }
        return result;
    }

    return (
    <div>
        <div>
        {
        pageCount < 10 ?
            createPagination(1, pageCount):
            currentPage < 5 ?
                createPagination(1, 5).concat('...', createPagination(pageCount, pageCount)):
                currentPage > pageCount - 4?
                    createPagination(1, 1).concat('...', createPagination(pageCount - 4, pageCount)):
                    createPagination(1, 1).concat('...', createPagination(currentPage - 2, currentPage + 2), '...', createPagination(pageCount, pageCount))
        }
        </div>
        {
        props.isFetching ? 
            <Loader /> :
            props.users.map( u =>
                <div className={classes.user} key={u.id}>
                    
                    <NavLink to={"/profile/" + u.id}>
                        <img height="90px" src={u.photos.small || defaultAvatar} alt="user avatar"></img>
                        <h3 style={{color: 'black'}}>{u.name}</h3>
                    </NavLink>
                    {u.status !== null ? <div> {u.status}</div> : ''}
                    <button onClick={() => props.handleFollowing(u.id, u.followed)}>{u.followed === true ? 'unfollow' : 'follow'}</button>
                </div>
            )
        }
    </div>
    )
};

export default Users;