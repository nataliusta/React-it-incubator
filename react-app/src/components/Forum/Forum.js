import React from 'react';
import classes from './Forum.module.css';
import DialogItem from './DialogItem/DialogItem.js';
import MessageItem from './MessageItem/MessageItem.js';
import { addCommentActionCreator, updateNewTextCommentActionCreator  } from '../../redux/state';

const Forum = (props) => {

    let dialogsElements = props.forumPage.dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = props.forumPage.messagesData.map ( message => <MessageItem message={message.message} /> );

    let newCommentElement = React.createRef();

    let addComment = () => {
        //props.addComment();
        props.dispatch(addCommentActionCreator());
    }

    let onCommentChange = () => {
        let text = newCommentElement.current.value;
        //props.dispatch( {type: 'UPDATE-NEW-TEXT-COMMENT', newComment: text } );
        let action = updateNewTextCommentActionCreator(text);
        props.dispatch(action);
    }

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
            <div className={classes.messagesField}>
                <textarea onChange={onCommentChange} className={classes.text} ref={newCommentElement} value={props.forumPage.newTextComment} />
                <button className={classes.buttonMessages} onClick={ addComment }>Send</button>
            </div>
        </div>
    )
}

export default Forum;