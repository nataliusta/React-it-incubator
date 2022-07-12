import React from 'react';
import classes from './../Forum.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <li className={classes.item + ' ' + classes.active}>
            <NavLink to={'/forum/' + props.id}>{props.name}</NavLink>
        </li>
    )
}

export default DialogItem;