import React from 'react';
import classes from "./ProfileInfo.module.css";
import profileWallpaper from "../../../resources/images/profile-wallpaper.jpg";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.main_wallpaper} src={profileWallpaper} alt="cool stuff"></img>
            </div>
            <div className={classes.description_block}>
                ava+desc
            </div>
        </div>
    )
};

export default ProfileInfo;