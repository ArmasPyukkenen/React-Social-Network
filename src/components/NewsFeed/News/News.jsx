import React from 'react';
import Frame from '../../Frame/Frame';
import s from './News.module.css';
import spidermanAvatar from '../../../resources/images/spiderman.jpg';

const News = () => {
    return (
        <Frame>
            <div className={s.news_wrapper}>
                <div className={s.source_info}>
                    <img className={s.avatar} src={spidermanAvatar} alt="spiderman"/>
                    <p>News source</p>
                </div>
                <div>
                    <h2>Headline</h2>
                    <p>Lorum ipsum</p>
                </div>
            </div>
        </Frame>
    )
};

export default News;