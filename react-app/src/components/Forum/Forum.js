import React from 'react';
import classes from './Forum.module.css';
import DialogItem from './DialogItem/DialogItem.js';
import MessageItem from './MessageItem/MessageItem.js';
import { addMessageActionCreator, updateNewTextMessageActionCreator  } from '../../redux/state';

const Forum = (props) => {

    let dialogsElements = props.forumPage.dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = props.forumPage.messagesData.map ( message => <MessageItem message={message.message} /> );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        //props.addmessage();
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        //props.dispatch( {type: 'UPDATE-NEW-TEXT-MESSAGE', newMessage: text } );
        let action = updateNewTextMessageActionCreator(text);
        props.dispatch(action);
    }

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
                <textarea onChange={onMessageChange} className={classes.text} ref={newMessageElement} value={props.forumPage.newTextMessage} />
                <button className={classes.buttonMessages} onClick={ addMessage }>Send</button>
            </div>
        </div>
    )
}

export default Forum;