import React from 'react';
import classes from '../FormControls/FormControls.module.css';

export const Element = Element => ({input, meta: {touched, error}, ...props}) => { // rest operator
    
    const hasError = touched && error;
    return (
        <div className={classes.formControl + '' + (hasError ? classes.error : '')}>
            <Element {...input} {...props} /> 
            { hasError && <span className={classes.errorText}>{error}</span> } 
        </div>
    )
}