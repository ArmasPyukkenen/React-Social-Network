import MyPosts from './MyPosts';
import {connect} from "react-redux";
import {addPostActionCreator, changeNewPostActionCreator} from "../../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        changeNewPostText: (text) => dispatch(changeNewPostActionCreator(text))
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;