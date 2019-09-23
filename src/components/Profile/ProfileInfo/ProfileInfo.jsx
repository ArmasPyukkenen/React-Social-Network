import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.main_wallpaper} src="https://ru.tokkoro.com/picsup/2955858-mountains-river-snow-forest-dual-monitors-ultra-wide-nature-landscape-digital-art-trees___landscape-nature-wallpapers.jpg" alt="cool stuff"></img>
            </div>
            <div className={classes.description_block}>
                ava+desc
            </div>
        </div>
    )
};

export default ProfileInfo;