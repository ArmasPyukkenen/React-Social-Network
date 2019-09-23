import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <p>
                <img className={s.avatar} src="https://res.cloudinary.com/teepublic/image/private/s--AEso_4pt--/t_Preview/b_rgb:c62b29,c_limit,f_jpg,h_630,q_90,w_630/v1500491730/production/designs/1750300_1.jpg" alt="spiderman"></img>
                <span>{props.message || 'empty post'}</span>
                <br/>
                {`like ${props.likes || ''}`}
            </p>
        </div>   
    )
};

export default Post;