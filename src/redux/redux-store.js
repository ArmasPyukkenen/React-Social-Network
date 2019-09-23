import reduceProfile from "./profile-reducer";
import reduceDialogs from "./dialogs-reducer";
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
    profilePage: reduceProfile,
    dialogsPage: reduceDialogs
});

let store = createStore(reducers);

export default store;