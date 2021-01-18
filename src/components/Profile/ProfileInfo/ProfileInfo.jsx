import React from 'react';
import classes from "./ProfileInfo.module.css";
import profileWallpaper from "../../../resources/images/profile-wallpaper.jpg";
import defaultAvatar from '../../../resources/images/defaultavatar.png';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={classes.main_wallpaper} src={profileWallpaper} alt="cool stuff"></img>
            </div>
            <div className={classes.description_block}>
                <img src={props.avatar !== null ? props.avatar : defaultAvatar} alt="User avatar"></img>
                <h2>{props.fullName || "<username>"}</h2>
            </div>
        </div>
    )
};

export default ProfileInfo;