import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {changeNewMessage, sendMessage} from "../../redux/dialogs-reducer";
import { compose } from "redux";
import withAuthRedirect from '../../HOC/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {changeNewMessage, sendMessage})
)(Dialogs);