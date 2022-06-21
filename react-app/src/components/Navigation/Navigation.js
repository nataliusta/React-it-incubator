import React from "react";
import classes from './Navigation.module.css';

function Navigation() {
    return (
        <nav className={classes.navigation}>
          <ul className={classes.menu}>
            <li className={`${classes.item} ${classes.active}`}>Home</li>
            <li className={classes.item}>Forum</li>
            <li className={classes.item}>News</li>
            <li className={classes.item}>Contacts</li>
            <li className={classes.item}>Gallery</li>
        </ul>
      </nav>
    )
}

export default Navigation;