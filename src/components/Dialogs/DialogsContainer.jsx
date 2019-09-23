import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {changeNewMessageActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeNewMessage: (text) => dispatch(changeNewMessageActionCreator(text)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;