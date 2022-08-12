import React from 'react';
import classes from './MainPage.module.css';
import Posts from './Posts/Posts.js';
import { addCommentCreator, updateNewCommentBodyCreator } from '../../redux/state';


function MainPage(props) {

  let newCommentBody = props.newCommentBody;

  let onSendCommentClick = () => {
    props.dispatch(addCommentCreator());
  }

  let onNewCommentChange = (event) => {
    let body = event.target.value;
    props.dispatch(updateNewCommentBodyCreator(body));
  }

    return (
      <div>
        <div>
          <img src='https://tdf-asia.com/wp-content/uploads/2021/01/in-store-display_TDF-visual-merchandising-manufacturer.jpg' alt='Chanel store' />
        </div>
        <Posts />
        <div className={classes.commentsField}>
          <textarea className={classes.text} value={newCommentBody} 
                    onChange={onNewCommentChange}
                    placeholder='Help us to be better'/>
          <button className={classes.buttonComments} onClick={onSendCommentClick}>Send</button>
        </div>
      </div>
    )
}

export default MainPage;