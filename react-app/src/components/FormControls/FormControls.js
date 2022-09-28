import React from 'react';
import classes from './FormControls.module.css';

export const Textarea = ({input, meta, ...props}) => { // rest operator
    
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + '' + (hasError ? classes.error : '')}>
            <textarea {...input} {...props} /> 
            { meta.touched && meta.error && <span>{meta.error}</span> } 
        </div>
    )
}