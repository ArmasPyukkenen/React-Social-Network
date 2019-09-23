import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>
            <p>{props.message}</p>
        </div>
    )
};

const Dialogs = (props) => {
    const state = props.dialogsPage;

    const renderDialogNames = () => state.dialogNames.map( d => <DialogItem name={d.name} id={d.id}/>);

    const renderMessages = () => state.messages.map( m => <Message message={m.message} id={m.id}/>);

    const changeNewMessage = (e) => {
        const text = e.target.value;
        props.changeNewMessage(text);
    };

    const sendMessage = () => {
        props.sendMessage();
    };

    return(
        <div className={s.message_page}>
            <div className={s.dialog_items}>
                <h2>Dialogs</h2>
                {renderDialogNames()}
            </div>
            <div className={s.message_items}>
                {renderMessages()}
                <textarea value={state.newMessageText} onChange={changeNewMessage}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
};

export default Dialogs;