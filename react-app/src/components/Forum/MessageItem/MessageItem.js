import React from 'react';
import classes from './../Forum.module.css';

const MessageItem = (props) => {
    return (
        <li className={classes.item}>{props.message}</li>
    )
}

export default MessageItem;