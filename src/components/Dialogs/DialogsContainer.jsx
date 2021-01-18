import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {changeNewMessage, sendMessage} from "../../redux/dialogs-reducer";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const DialogsContainer = connect(mapStateToProps, {changeNewMessage, sendMessage})(Dialogs);

export default DialogsContainer;