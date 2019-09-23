import React from 'react';
import s from './News.module.css';

const News = () => {
    return (
        <div className={s.news_wrapper}>
            <div className={s.source_info}>
                <img className={s.avatar} src="https://res.cloudinary.com/teepublic/image/private/s--AEso_4pt--/t_Preview/b_rgb:c62b29,c_limit,f_jpg,h_630,q_90,w_630/v1500491730/production/designs/1750300_1.jpg" alt="spiderman"/>
                <p>News source</p>
            </div>
            <div>
                <h2>Headline</h2>
                <p>Lorum ipsum</p>
            </div>
        </div>
    )
};

export default News;