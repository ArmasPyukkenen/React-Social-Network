import React from 'react';
import s from './Post.module.css';
import spidermanAvatar from '../../../../resources/images/spiderman.jpg';

const Post = (props) => {
    return (
        <div className={s.item}>
            <p>
                <img className={s.avatar} src={spidermanAvatar} alt="spiderman"></img>
                <span>{props.message || 'empty post'}</span>
                <br/>
                {`like ${props.likes || ''}`}
            </p>
        </div>   
    )
};

export default Post;