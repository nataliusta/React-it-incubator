import React from 'react';
import classes from './MainPage.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';
import Comments from './Comments/Comments.js';

const MainPage = (props) => {

    return (
      <div className={classes.mainContent}>
        <div className={classes.mainPicture}>
          <img src='https://tdf-asia.com/wp-content/uploads/2021/01/in-store-display_TDF-visual-merchandising-manufacturer.jpg' alt='Chanel store' />
        </div>
        <div className={classes.post}>
            <p className={classes.item}>“I don't understand how a woman can leave the house without fixing herself up a little - 
                if only out of politeness. And then, you never know, maybe that's the day she has a date with destiny. 
                And it's best to be as pretty as possible for destiny.”
            </p>
            <cite className={classes.author}>― Coco Chanel</cite>
        </div>
        <ProfileInfo />
        <Comments dispatch={props.dispatch} />
      </div>
    )
}

export default MainPage;
