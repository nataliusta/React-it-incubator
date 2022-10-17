import React from 'react';
import classes from './Comments.module.css';
import CommentItem from './CommentItem/CommentItem.js';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators';
import { Element } from '../../FormControls/FormControls';

const maxLength10 = maxLengthCreator(10);

const Comments = React.memo(props => { // HOC f

    console.log('Render');
    let commentElements = props.commentsData.map ( comment => <CommentItem comment={comment.comment} key={comment.id} /> );

    let AddNewComment = (values) => {
      props.addComment(values.newCommentBody);
    };

    return (
        <div className={classes.mainComments}>
            <div className={classes.comments}>
                <ul className={classes.commentsList}>
                    <div>{commentElements}</div>
                </ul>
            </div>
            <AddCommentBodyFormRedux onSubmit={AddNewComment} />
        </div>
    )
});

const Textarea = Element("textarea");

const AddCommentBodyForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.commentsField}>
              <Field className={classes.text} component={Textarea} 
                    name='newCommentBody' placeholder={'Enter your comment'}
                    validate = {[required, maxLength10]} />
              <button className={classes.buttonComments}>Send</button>
    </form>
  )
}

const AddCommentBodyFormRedux = reduxForm({form: 'profileAddCommentBodyForm'})(AddCommentBodyForm);

export default Comments;