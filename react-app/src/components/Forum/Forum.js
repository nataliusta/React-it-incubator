import React from 'react';
import classes from './Forum.module.css';
import DialogItem from './DialogItem/DialogItem.js';
import MessageItem from './MessageItem/MessageItem.js';
import { addMessageActionCreator, updateNewTextMessageActionCreator  } from '../../redux/forum-reducer';

const Forum = (props) => {

    //let state = props.store.getState().forumPage;

    let dialogsElements = props.dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = props.messagesData.map ( message => <MessageItem message={message.message} /> );

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
        //props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewTextMessage(text);
        //let action = {type: 'UPDATE-NEW-TEXT-MESSAGE', newMessage: text };
        //let action = updateNewTextMessageActionCreator(text);
        //props.dispatch(action);
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
                <button className={classes.buttonMessages} onClick={ onAddMessage }>Send</button>
            </div>
        </div>
    )
}

export default Forum;