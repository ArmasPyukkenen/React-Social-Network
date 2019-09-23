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
            state.newMessageText = action.currentNewMessage;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                message : state.newMessageText,
                id : state.messages.length + 1
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
};

export const changeNewMessageActionCreator = (text) => ({type: CHANGE_NEW_MESSAGE, currentNewMessage: text});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export default reduceDialogs;