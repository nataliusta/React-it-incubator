import React from 'react';
import classes from '../FormControls/FormControls.module.css';

export const Element = Element => ({input, meta, ...props}) => { // rest operator
    
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + '' + (hasError ? classes.error : '')}>
            <Element {...input} {...props} /> 
            { hasError && <span className={classes.errorText}>{meta.error}</span> } 
        </div>
    )
}