import React from 'react';
import classes from './Forum.module.css';
import DialogItem from './DialogItem/DialogItem.js';
import MessageItem from './MessageItem/MessageItem.js';

const Forum = (props) => {

    let dialogsData = [
        {id: 'samanta', name: 'Samanta'},
        {id: 'alexa', name: 'Alexa'},
        {id: 'olivia', name: 'Olivia'},
        {id: 'chloe', name: 'Chloe'},
        {id: 'emily', name: 'Emily'},
        {id: 'carla', name: 'Carla'},
        {id: 'jess', name: 'Jess'},
        {id: 'sophie', name: 'Sophie'}
    ]

    let messagesData = [
        {id: 1, message: 'Definitely in love with my lipstick!!!'},
        {id: 2, message: 'Hello,could you advice me a good perfume?'},
        {id: 3, message: 'What do you think about Chanel products?'},
        {id: 4, message: 'Hello everyone!!!'},
        {id: 5, message: 'Not sure I liked Chanel Coco Mademoiselle....'}
    ]

    let dialogsElements = dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    let messagesElements = messagesData.map ( message => <MessageItem message={message.message} /> )

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