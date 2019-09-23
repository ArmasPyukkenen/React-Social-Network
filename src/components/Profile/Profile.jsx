import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.profileState.postsData} newPostText={props.profileState.newPostText} dispatch={props.dispatch}/>
        </div>)
};

export default Profile;