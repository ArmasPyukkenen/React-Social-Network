import MyPosts from './MyPosts';
import {connect} from "react-redux";
import {addPost, changeNewPost} from "../../../redux/profile-reducer";

const mapStateToProps = (state) => {
    const {postsData, newPostText} = state.profilePage
    return {postsData, newPostText}
};

const MyPostsContainer = connect(mapStateToProps, {addPost, changeNewPost})(MyPosts);

export default MyPostsContainer;