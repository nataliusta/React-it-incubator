import React from 'react';
import classes from './Forum.module.css';
import { NavLink } from 'react-router-dom';

const Forum = (props) => {
    return (
        <div className={classes.forumDialogs}>
            <div className={classes.dialogs}>
                <ul className={classes.dialogsList}>
                    <li className={classes.item + ' ' + classes.active}>
                        <NavLink to='/forum/samanta'>Samanta</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/forum/alexa'>Alexa</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/forum/olivia'>Olivia</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/forum/chloe'>Chloe</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/forum/emily'>Emily</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/forum/carla'>Carla</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/forum/jess'>Jess</NavLink>
                    </li>
                    <li className={classes.item}>
                        <NavLink to='/forum/sophie'>Sophie</NavLink>
                    </li>
                </ul>
            </div>
            <div className={classes.messages}>
                <ul className={classes.messagesList}>
                    <li className={classes.item}>I'm definitely in love with my lipstick!!!</li>
                    <li className={classes.item}>Hello,could you advice me a good perfume?</li>
                    <li className={classes.item}>What do you think about Chanel products?</li>
                    <li className={classes.item}>Hello everyone!!!</li>
                    <li className={classes.item}>Not sure I liked Chanel Coco Mademoiselle....</li>
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Forum;