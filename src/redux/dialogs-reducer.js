const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
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
};

const reduceDialogs = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.currentNewMessage
            };
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {message : state.newMessageText, id: state.messages.length + 1}],
                newMessageText: ''
            };
        default:
            return state;
    }
};

export const changeNewMessageActionCreator = (text) => ({type: CHANGE_NEW_MESSAGE, currentNewMessage: text});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export default reduceDialogs;