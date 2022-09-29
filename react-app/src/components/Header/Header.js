import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
          <img src='https://i.pinimg.com/736x/7a/6f/7e/7a6f7e9c3d564feb516bff7e62e3cc33.jpg' alt='Chanel logo' />
          <img src='https://cdn.shopify.com/s/files/1/1078/7736/products/FANCLUBFINALLOGO.png?v=1585045856' alt='Fun club logo' />
          <div className={classes.loginBlock}>
            { props.isAuth 
            ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>Login</NavLink> }
          </div>
        </header>
    )
}

export default Header;