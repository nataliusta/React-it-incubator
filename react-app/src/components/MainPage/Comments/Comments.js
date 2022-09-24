import React from 'react';
import classes from './Comments.module.css';
import CommentItem from './CommentItem/CommentItem.js';
import { addCommentCreator} from '../../../redux/main-reducer';
import { Field, reduxForm } from 'redux-form';

const Comments = (props) => {

  //let commentElements = props.state.map ( comment => <CommentItem comment={comment.comment} key={comment.id} /> );
  let newCommentBody = props.newCommentBody; 

  let onSendCommentClick = () => {
    props.dispatch(addCommentCreator());
  }

  let onAddComment = (values) => {
    props.addComment(values.addCommentBody);
  }
    return (
        <div className={classes.comments}>
            <div className={classes.commentsItem}>
                <CommentItem />
            </div>
            <AddCommentBodyFormRedux onSubmit={onAddComment} />
        </div>
    )
}

const AddCommentBodyForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.commentsField}>
              <Field className={classes.text} component='textarea' 
                    name='addCommentBody' />
              <button className={classes.buttonComments}>Send</button>
    </form>
  )
}

const AddCommentBodyFormRedux = reduxForm({form: 'ProfileAddCommentBodyForm'})(AddCommentBodyForm);

export default Comments;