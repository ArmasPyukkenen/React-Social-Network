import reduceProfile from "./profile-reducer";
import reduceDialogs from "./dialogs-reducer";
import reduceUsers from "./users-reducer";

export let store = {
    _callSubscriber(){},
    _state : {
        profile : {
            postsData : [{message:"Hi, how are you?", likes:5},
                {message: "Hey, it's a beautiful day!", likes:10}],
            newPostText : ''
        },

        dialogs : {
            dialogNames : [
                {name: "Mum", id: 1},
                {name: "Sasha", id: 2},
                {name: "Gleb", id: 3}
            ],
            messages :  [
                {message: 'Hi!', id: 1},
                {message: 'Yo', id: 2},
                {message: 'Bum bum tu tu tu', id: 3},
            ],
            newMessageText : ''
        }

    },
    getState(){
      return this._state;
    },
    dispatch(action){
        this._state.profile = reduceProfile(this._state.profile, action);
        this._state.dialogs = reduceDialogs(this._state.dialogs, action);
        this._state.users = reduceUsers(this._state.users, action);
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;