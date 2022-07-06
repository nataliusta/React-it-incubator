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
    return (
        <div className={classes.forumDialogs}>
            <div className={classes.dialogs}>
                <ul className={classes.dialogsList}>
                    <DialogItem name='Samanta' id='samanta' />
                    <DialogItem name='Alexa' id='alexa' />
                    <DialogItem name='Olivia' id='olivia' />
                    <DialogItem name='Chloe' id='chloe' />
                    <DialogItem name='Emily' id='emily' />
                    <DialogItem name='Carla' id='carla' />
                    <DialogItem name='Jess' id='jess' />
                    <DialogItem name='Sophie' id='sophie' />
                </ul>
            </div>
            <div className={classes.messages}>
                <ul className={classes.messagesList}>
                    <MessageItem message='Definitely in love with my lipstick!!!' />
                    <MessageItem message='Hello,could you advice me a good perfume?' />
                    <MessageItem message='What do you think about Chanel products?' />
                    <MessageItem message='Hello everyone!!!' />
                    <MessageItem message='Not sure I liked Chanel Coco Mademoiselle....' />
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Forum;