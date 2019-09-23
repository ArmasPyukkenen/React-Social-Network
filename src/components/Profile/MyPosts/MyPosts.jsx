import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {addPostActionCreator, changeNewPostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    const newPostElement = React.createRef();

    const postsArea = props.postsData.map( p => <Post message={p.message} likes={p.likes}/>);

    const onAddPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const changeNewPostText = () => {
        const text = newPostElement.current.value;
        props.dispatch(changeNewPostActionCreator(text));
    };

    return (
        <div className={s.posts_section}>
            <p>My posts</p>
            <textarea ref={newPostElement} onChange={changeNewPostText} value={props.newPostText}></textarea><br/>
            <button onClick={onAddPost}>Add post</button>
            {postsArea}
        </div>
    )
};

export default MyPosts;