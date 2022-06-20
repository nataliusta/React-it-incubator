import React from "react";
import classes from './Posts.module.css';
import Post from './Post/Post.js';

function Posts() {
    return (
        <div className={classes.posts}>
            <Post />
        </div>
    )
}

export default Posts; 