import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = (props) => {
    const postsArea = props.postsData.map( p => <Post key={p.id} message={p.message} likes={p.likes}/>);

    const addPost = () => {
        props.addPost();
    };

    const changeNewPostText = (event) => {
        const text = event.target.value;
        props.changeNewPost(text);
    };

    return (
        <div className={s.posts_section}>
            <h2>My posts</h2>
            <textarea onChange={changeNewPostText} value={props.newPostText}></textarea><br/>
            <button onClick={addPost}>Add post</button>
            {postsArea}
        </div>
    )
};

export default MyPosts;