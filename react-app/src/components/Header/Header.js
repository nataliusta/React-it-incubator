import React from 'react';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
          <img src='https://i.pinimg.com/736x/7a/6f/7e/7a6f7e9c3d564feb516bff7e62e3cc33.jpg' alt='Chanel logo' />
          <img src='https://cdn.shopify.com/s/files/1/1078/7736/products/FANCLUBFINALLOGO.png?v=1585045856' alt='Fun club logo' />
        </header>
    )
}

export default Header;