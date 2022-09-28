import React from 'react';
import classes from './FormControls.module.css';

export const Element = Element => ({input, meta, ...props}) => { // rest operator
    
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + '' + (hasError ? classes.error : '')}>
            <Element {...input} {...props} /> 
            { hasError && <span>{meta.error}</span> } 
        </div>
    )
}

/*export const Element = Element => ({input, meta, ...props}) => {
    
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + '' + (hasError ? classes.error : '')}>
            <Element {...input} {...props} /> 
            { hasError && <span>{meta.error}</span> } 
        </div>
    )
}*/