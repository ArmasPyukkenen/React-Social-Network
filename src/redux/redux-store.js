import reduceProfile from "./profile-reducer";
import reduceDialogs from "./dialogs-reducer";
import {combineReducers, createStore} from "redux";
import reduceUsers from "./users-reducer";
import reduceAuthorization from "./auth-reducer";

const reducers = combineReducers({
    profilePage: reduceProfile,
    dialogsPage: reduceDialogs,
    usersPage: reduceUsers,
    auth: reduceAuthorization
});

let store = createStore(reducers);

export default store;