import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css';

const activeLink = ({isActive}) => isActive ? classes.active : classes.item; 

function Navigation() {
    return (
        <nav className={classes.navigation}>
          <ul className={classes.menu}>
            <li className={`${classes.item} ${classes.active}`}>
              <NavLink to='/mainpage' className={activeLink}>Home</NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to='/forum' className={activeLink}>Forum</NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to='/news' className={activeLink}>News</NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to='/contacts' className={activeLink}>Contacts</NavLink>
            </li>
            <li className={classes.item}>
              <NavLink to='/gallery' className={activeLink}>Gallery</NavLink>
            </li>
        </ul>
      </nav>
    )
}

export default Navigation;