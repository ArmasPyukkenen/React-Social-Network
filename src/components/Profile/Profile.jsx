import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo
                fullName={props.fullName}
                avatar={props.avatar}
            />
            <MyPostsContainer/>
        </div>)
};

export default Profile;