import React from 'react';
import classes from './NewsFeed.module.css';
import News from './News/News';

const NewsFeed = () => {
    return (
        <div className={classes.news_feed}>
            <News />
            <News />
        </div>)
};

export default NewsFeed;