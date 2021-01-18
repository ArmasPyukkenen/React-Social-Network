const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_PAGE_COUNT = "SET_TOTAL_PAGE_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const initialState = {
    users: [],
    resultsOnPage: 10,
    pageCount: 0,
    currentPage: 1,
    isFetching: false
};

const reduceUsers = (state = initialState, action) => {
    switch (action.type){
        case UNFOLLOW:
            return ({
                ...state,
                users: state.users.map( u => u.id === action.userId ? {...u, followed: false} : u),
            });
        case FOLLOW:
            return ({
                ...state,
                users: state.users.map( u => u.id === action.userId ? {...u, followed: true} : u),
            });
        case SET_USERS:
            return ( {
                ...state,
                users: action.users
            });
        case SET_CURRENT_PAGE:
            return({
                ...state,
                currentPage: action.pageNumber
            });
        case SET_TOTAL_PAGE_COUNT:
            return( {
                ...state,
                pageCount: action.totalPageCount
            });
        case SET_IS_FETCHING:
            return( {
                ...state,
                isFetching: action.isFetching
            });
        default:
            return state;
    }
};

export const followUser = (userId) => ({ type: FOLLOW, userId });
export const unfollowUser = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalPageCount = (totalPageCount) => ({type: SET_TOTAL_PAGE_COUNT, totalPageCount});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

export default reduceUsers;
