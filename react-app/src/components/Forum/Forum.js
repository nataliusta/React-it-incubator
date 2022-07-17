import React from 'react';
import classes from './Forum.module.css';
import DialogItem from './DialogItem/DialogItem.js';
import MessageItem from './MessageItem/MessageItem.js';

const Forum = (props) => {

    let dialogsElements = props.state.dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = props.state.messagesData.map ( message => <MessageItem message={message.message} /> )

    return (
        <div className={classes.forumDialogs}>
            <div className={classes.dialogs}>
                <ul className={classes.dialogsList}>
                    {dialogsElements}
                </ul>
            </div>
            <div className={classes.messages}>
                <ul className={classes.messagesList}>
                    {messagesElements}
                </ul>
            </div>
        </div>
    )
}

export default Forum;