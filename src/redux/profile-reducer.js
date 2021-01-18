import samuraiAPI from '../DAL/api';

const CHANGE_NEW_POST = "CHANGE-NEW-POST";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
    avatar: null,
    fullName: null,
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
        case SET_USER_PROFILE:
            return {
                ...state,
                avatar: action.avatar,
                fullName: action.fullName
            }
        default:
            return state;
    }
};

export const changeNewPost = (text) => ({type: CHANGE_NEW_POST, currentPostMessage: text});
export const addPost = () => ({type: ADD_POST});
export const setUserProfile = ({avatar, fullName}) => ({ type: SET_USER_PROFILE, avatar, fullName});

export const getUserProfile = userId => dispatch => {
    samuraiAPI.getProfile(userId)
    .then(data => {
        dispatch(setUserProfile({avatar: data.photos.large, fullName: data.fullName}))
    })
}

export default reduceProfile;