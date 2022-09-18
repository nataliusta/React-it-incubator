import React from 'react';
import {Navigate} from 'react-router-dom';
import classes from './Forum.module.css';
import DialogItem from './DialogItem/DialogItem.js';
import MessageItem from './MessageItem/MessageItem.js';

const Forum = (props) => {

    let dialogsElements = props.dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} /> );
    let messagesElements = props.messagesData.map ( message => <MessageItem message={message.message} key={message.id} /> );

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewTextMessage(text);
    }

    if (!props.isAuth) return <Navigate to='/login' />;

    return (
        <div className={classes.forumDialogs}>
            <div className={classes.dialogs}>
                <ul className={classes.dialogsList}>
                    <div>{dialogsElements}</div>
                </ul>
            </div>
            <div className={classes.messages}>
                <ul className={classes.messagesList}>
                    <div>{messagesElements}</div>
                </ul>
            </div>
            <div className={classes.messagesField}>
                <textarea onChange={onMessageChange} className={classes.text} ref={newMessageElement} value={props.newTextMessage} />
                <button className={classes.buttonMessages} onClick={ onAddMessage }>Send</button>
            </div>
        </div>
    )
}

export default Forum;