const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
//const SET_USERS = "SET_USERS";

const initialState = {
    users: [
        {id: 0, name: "Sanya", location: {cityName: "Piter", countryName: "Russia"}, followed: true, status: "strauss yee-huw"},
        {id: 1, name: "Leha", location: {cityName: "Moscow", countryName: "Russia"}, followed: false, status: "obnoxious"},
        {id: 2, name: "Danya", location: {cityName: "Miami", countryName: "USA"}, followed: true, status: "many moneys"},
    ]
};

const reduceUsers = (state = initialState, action) => {
    switch (action.type){
        case UNFOLLOW:
            return ({
                users: state.users.map( u => u.id === action.userId ? {...u, followed: false} : u),
            });
        case FOLLOW:
            return ({
                users: state.users.map( u => u.id === action.userId ? {...u, followed: true} : u),
            });
        //case SET_USERS:
        default:
            return state;
    }
};

export const followUserAC = (userId) => ({ type: FOLLOW, userId: userId});
export const unfollowUserAC = (userId) => ({ type: UNFOLLOW, userId: userId});

export default reduceUsers;
