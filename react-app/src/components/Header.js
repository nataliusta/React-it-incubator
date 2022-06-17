import React from 'react';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp88JRLfvIPwabmfdyD-Vh11ptnX0TnPBSng&usqp=CAU' alt='Chanel logo' />
        </header>
    )
}

export default Header;