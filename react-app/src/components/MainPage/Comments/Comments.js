import React from 'react';
import classes from './Comments.module.css';
import CommentItem from './CommentItem/CommentItem.js';
import { addCommentCreator, updateNewCommentBodyCreator } from '../../../redux/main-reducer';

const Comments = (props) => {

  //let commentElements = props.state.map ( comment => <CommentItem comment={comment.comment} key={comment.id} /> );
  let newCommentBody = props.newCommentBody; 

  let onSendCommentClick = () => {
    props.dispatch(addCommentCreator());
  }

  let onNewCommentChange = (event) => {
    let body = event.target.value;
    props.dispatch(updateNewCommentBodyCreator(body));
  }
    return (
        <div className={classes.comments}>
            <div className={classes.commentsItem}>
                <CommentItem />
            </div>
            <div className={classes.commentsField}>
                <textarea className={classes.text} value={newCommentBody} 
                            onChange={onNewCommentChange}
                            placeholder='Help us to be better'/>
                <button className={classes.buttonComments} onClick={onSendCommentClick}>Send</button>
          </div>
        </div>
    )
}

export default Comments;