import React, {useEffect} from 'react';
import * as axios from 'axios';
import defaultAvatar from '../../resources/images/defaultavatar.png';
import classes from './Users.module.css';

const Users = (props) => {

    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then((res) => {
            console.log(res);
            props.setUsers(res.data.items);
        })
    }, [])

    const handleFollowing = (userId, followStatus) => {
        return followStatus ? () => props.unfollowUser(userId) : () => props.followUser(userId);
    };

    return <div>
        {props.usersPage.users.map( u =>
            <div className={classes.user} key={u.id}>
                <img height="90px" src={u.photos.small || defaultAvatar} alt="user avatar"></img>
                <h4>{u.name}</h4>
                {u.status !== null ? <div> {u.status}</div> : ''}
                <button onClick={handleFollowing(u.id, u.followed)}>{u.followed === true ? 'unfollow' : 'follow'}</button>
            </div>
        )}
    </div>
};

export default Users;