import React from "react";
import classes from './Footer.module.css';

function Footer() {
    return (
       <footer className={classes.footer}>
            <ul className={classes.menu}>
                <li className={classes.item}>Logo</li>
                <li className={classes.item}>Copyright</li>
            </ul>
        </footer> 
    )
}

export default Footer;