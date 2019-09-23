const CHANGE_NEW_POST = "CHANGE-NEW-POST";
const ADD_POST = "ADD-POST";

const initialState = {
    postsData : [{message:"Hi, how are you?", likes:5},
        {message: "Hey, it's a beautiful day!", likes:10}],
    newPostText : ''
}

const reduceProfile = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_NEW_POST:
            state.newPostText = action.currentPostMessage;
            return state;
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                likes: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        default:
            return state;
    }
};

export const changeNewPostActionCreator = (text) => ({type: CHANGE_NEW_POST, currentPostMessage: text});
export const addPostActionCreator = () => ({type: ADD_POST});

export default reduceProfile;