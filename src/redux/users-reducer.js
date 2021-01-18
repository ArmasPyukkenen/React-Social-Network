import samuraiAPI from '../DAL/api';

const SET_FOLLOWING_STATUS = "SET_FOLLOWING_STATUS";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_PAGE_COUNT = "SET_TOTAL_PAGE_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const BLOCK_BUTTON = "BLOCK_BUTTON";
const RELEASE_BUTTON = "RELEASE_BUTTON";

const initialState = {
    users: [],
    pageSize: 10,
    pageCount: 0,
    currentPage: 1,
    isFetching: false,
    blockedButtons : []
};

const reduceUsers = (state = initialState, action) => {
    switch (action.type){
        case SET_FOLLOWING_STATUS:
            return ({
                ...state,
                users: state.users.map( u => u.id === action.userId ? {...u, followed: action.followingStatus} : u)
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
        case BLOCK_BUTTON:
            return( {
                ...state,
                blockedButtons: [...state.blockedButtons, action.userId]
            });
        case RELEASE_BUTTON:
            return( {
                ...state,
                blockedButtons: state.blockedButtons.filter(id => id !== action.userId)
            })
        default:
            return state;
    }
};

export const setFollowingStatus = (userId, followingStatus) => ({type: SET_FOLLOWING_STATUS, userId, followingStatus});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalPageCount = (totalPageCount) => ({type: SET_TOTAL_PAGE_COUNT, totalPageCount});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const blockButton = (userId) => ({type: BLOCK_BUTTON, userId});
export const releaseButton = (userId) => ({type: RELEASE_BUTTON, userId});

export const getUsers = (currentPage, pageSize) => dispatch => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    samuraiAPI.getUsers(currentPage, pageSize)
    .then((data) => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalPageCount(Math.ceil(data.totalCount / pageSize)))
    })
}

export const changeFollowingStatus = (userId, followingStatus) => dispatch => {
    dispatch(blockButton(userId));
    (followingStatus ? samuraiAPI.followUser(userId) : samuraiAPI.unfollowUser(userId))
    .then( resultCode => {
        if(resultCode === 0)
            dispatch(setFollowingStatus(userId, followingStatus));
    })
    .finally( () => {
        dispatch(releaseButton(userId));
    })
}

export default reduceUsers;
