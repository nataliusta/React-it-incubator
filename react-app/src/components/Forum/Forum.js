import React from 'react';
import classes from './Forum.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <li className={classes.item + ' ' + classes.active}>
            <NavLink to={'/forum/' + props.id}>{props.name}</NavLink>
        </li>
    )
}

const MessageItem = (props) => {
    return (
        <li className={classes.item}>{props.message}</li>
    )
}

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

    return (
        <div className={classes.forumDialogs}>
            <div className={classes.dialogs}>
                <ul className={classes.dialogsList}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
                    <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} />
                    <DialogItem name={dialogsData[7].name} id={dialogsData[7].id} />
                </ul>
            </div>
            <div className={classes.messages}>
                <ul className={classes.messagesList}>
                    <MessageItem message={messagesData[0].message} />
                    <MessageItem message={messagesData[1].message} />
                    <MessageItem message={messagesData[2].message} />
                    <MessageItem message={messagesData[3].message} />
                    <MessageItem message={messagesData[4].message} />
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Forum;