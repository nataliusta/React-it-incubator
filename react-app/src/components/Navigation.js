import React from "react";
import classes from './Navigation.module.css';

function Navigation() {
    return (
        <nav className={classes.navigation}>
          <ul className='menu'>
            <li className={classes.item}>About us</li>
            <li className={classes.item}>Catalog</li>
            <li className={classes.item}>News</li>
            <li className={classes.item}>Contact us</li>
            <li className={classes.item}>Gallery</li>
        </ul>
      </nav>
    )
}

export default Navigation;