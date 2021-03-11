import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import Frame from "../Frame/Frame";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <Frame>
                <ProfileInfo
                    fullName={props.fullName}
                    avatar={props.avatar}
                />
            </Frame>
            <Frame>
                <MyPostsContainer/>
            </Frame>
        </div>
    )
};

export default Profile;