import React, { useState } from 'react';
import classes from "./ProfileInfo.module.css";
import defaultAvatar from '../../../resources/images/defaultavatar.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    return (
        <div className={classes.description_block}>
            <img src={props.avatar !== null ? props.avatar : defaultAvatar} alt="User avatar"></img>
            <h2>{props.fullName || "<username>"}</h2>
            <ProfileStatus />
        </div>
    )
};

export default ProfileInfo;