const CHANGE_NEW_POST = "CHANGE-NEW-POST";
const ADD_POST = "ADD-POST";

const initialState = {
    postsData : [{id:1, message:"Hi, how are you?", likes:5},
        {id: 2, message: "Hey, it's a beautiful day!", likes:10}],
    newPostText : ''
};

const reduceProfile = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_NEW_POST:
            return {
                ...state,
                newPostText: action.currentPostMessage
            };
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {id: new Date().getTime(), message: state.newPostText, likes: 0}],
                newPostText: ''
            };
        default:
            return state;
    }
};

export const changeNewPostActionCreator = (text) => ({type: CHANGE_NEW_POST, currentPostMessage: text});
export const addPostActionCreator = () => ({type: ADD_POST});

export default reduceProfile;