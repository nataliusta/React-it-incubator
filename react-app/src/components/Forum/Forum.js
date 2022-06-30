import React from 'react';
import classes from './Forum.module.css';

const Forum = (props) => {
    return (
        <div className={classes.forumDialogs}>
            <div className={classes.dialogs}>
                <ul className={classes.dialogsList}>
                    <li className={classes.item + ' ' + classes.active}>Samanta</li>
                    <li className={classes.item}>Alexa</li>
                    <li className={classes.item}>Olivia</li>
                    <li className={classes.item}>Chloe</li>
                    <li className={classes.item}>Emily</li>
                    <li className={classes.item}>Carla</li>
                    <li className={classes.item}>Jess</li>
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