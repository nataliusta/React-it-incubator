import React from 'react';
import classes from './CommentItem.module.css';

const CommentItem = (props) => {
    return (
        <li className={classes.item}>{props.comment}</li>
    )
}

export default CommentItem;