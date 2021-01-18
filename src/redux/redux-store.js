import reduceProfile from "./profile-reducer";
import reduceDialogs from "./dialogs-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import reduceUsers from "./users-reducer";
import reduceAuthorization from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    profilePage: reduceProfile,
    dialogsPage: reduceDialogs,
    usersPage: reduceUsers,
    auth: reduceAuthorization
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;