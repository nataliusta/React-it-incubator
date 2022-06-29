import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css';

function Navigation() {
    return (
        <nav className={classes.navigation}>
          <ul className={classes.menu}>
            <li className={`${classes.item} ${classes.active}`}>
              <NavLink to='/mainpage'>Home</NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to='/forum'>Forum</NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to='/news'>News</NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to='/contacts'>Contacts</NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to='/gallery'>Gallery</NavLink>
            </li>
        </ul>
      </nav>
    )
}

export default Navigation;