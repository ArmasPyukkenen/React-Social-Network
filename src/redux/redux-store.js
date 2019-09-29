import reduceProfile from "./profile-reducer";
import reduceDialogs from "./dialogs-reducer";
import {combineReducers, createStore} from "redux";
import reduceUsers from "./users-reducer";

const reducers = combineReducers({
    profilePage: reduceProfile,
    dialogsPage: reduceDialogs,
    usersPage: reduceUsers
});

let store = createStore(reducers);

export default store;