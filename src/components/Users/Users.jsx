import React from 'react';

const Users = (props) => {

    const handleFollowing = (userId, followStatus) => {
        return followStatus ? () => props.unfollowUser(userId) : () => props.followUser(userId);
    };

    return <div>
        {props.usersPage.users.map( u =>
            <div key={u.id}>
                <h4>{u.name}</h4>
                <div> {u.location.countryName} {u.location.cityName}</div>
                <button onClick={handleFollowing(u.id, u.followed)}>{u.followed === true ? 'unfollow' : 'follow'}</button>
            </div>
        )}
    </div>
};

export default Users;