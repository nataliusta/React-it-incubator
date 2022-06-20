import React from "react";
import classes from './Post.module.css';

function Post() {
    return (
        <div className={classes.post}>
            <p className={classes.item}>“I don't understand how a woman can leave the house without fixing herself up a little - 
                if only out of politeness. And then, you never know, maybe that's the day she has a date with destiny. 
                And it's best to be as pretty as possible for destiny.”
            </p>
            <cite className={classes.author}>― Coco Chanel</cite>
        </div>
    )
}

export default Post; 