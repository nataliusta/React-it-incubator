import React from 'react';
import preloader from './../../assets/img/preloader.gif';
import classes from '../Preloader/Preloader.module.css';

let Preloader = (props) => {
    return <div className={classes.newPreloader}>
           <img src={preloader} alt='Preloader'/>
    </div>
}

export default Preloader;