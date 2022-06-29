import React from "react";
import classes from './Navigation.module.css';

function Navigation() {
    return (
        <nav className={classes.navigation}>
          <ul className={classes.menu}>
            <li className={`${classes.item} ${classes.active}`}>
              <a href='/mainpage'>Home</a>
            </li>
            <li className={classes.item}>
              <a href='/forum'>Forum</a>
            </li>
            <li className={classes.item}>
              <a href='/news'>News</a>
            </li>
            <li className={classes.item}>
              <a href='/contacts'>Contacts</a>
            </li>
            <li className={classes.item}>
              <a href='/gallery'>Gallery</a>
            </li>
        </ul>
      </nav>
    )
}

export default Navigation;