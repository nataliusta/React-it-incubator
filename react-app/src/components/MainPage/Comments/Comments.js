import React from 'react';
import classes from './Comments.module.css';
import CommentItem from './CommentItem/CommentItem.js';
import { Field, reduxForm } from 'redux-form';

const Comments = (props) => {
  
  let commentElements = props.commentsData.map ( comment => <CommentItem comment={comment.comment} key={comment.id} /> );
  //let newCommentBody = props.newCommentBody; 

  /*let onSendCommentClick = () => {
    props.dispatch(addCommentCreator());
  }*/

  let AddNewComment = (values) => {
    props.addComment(values.newCommentBody);
  };

    return (
        <div className={classes.comments}>
            <div className={classes.comment}>
                <ul className={classes.commentList}>
                    <div>{commentElements}</div>
                </ul>
            </div>
            <AddCommentBodyFormRedux onSubmit={AddNewComment} />
        </div>
    )
}

const AddCommentBodyForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.commentsField}>
              <Field className={classes.text} component='textarea' 
                    name='newCommentBody' placeholder='Enter your comment' />
              <button className={classes.buttonComments}>Send</button>
    </form>
  )
}

const AddCommentBodyFormRedux = reduxForm({form: 'profileAddCommentBodyForm'})(AddCommentBodyForm);

export default Comments;