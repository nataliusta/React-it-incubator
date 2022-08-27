import React from 'react';
import classes from './MainPage.module.css';
import Posts from './Posts/Posts.js';
import Comments from './Comments/Comments.js';

const MainPage = (props) => {

    return (
      <div className={classes.mainContent}>
        <div className={classes.mainPicture}>
          <img src='https://tdf-asia.com/wp-content/uploads/2021/01/in-store-display_TDF-visual-merchandising-manufacturer.jpg' alt='Chanel store' />
        </div>
        <Posts />
        <Comments dispatch={props.dispatch} />
      </div>
    )
}

export default MainPage;