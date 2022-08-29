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

/*let a = {
  name: 'Natali',
  surname: 'Usta',
  age: 33,
  location: 'Turkey',
  position: 'Frontend developer',
  isOnline: true,
  colors: ['green', 'orange', 'black'],
  teachers: {
    newTeachers: {
      name: 'John',
      age: 40
    }
  }
}

let b = {...a};
b.colors = [...a.colors];
b.teachers = {...a.teachers};
b.teachers.newTeachers = {...a.teachers.newTeachers};

b.teachers.newTeachers.name = 'Boo';
b.colors.push('blue');

console.log(b); */