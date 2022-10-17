import React from 'react';
import classes from './User.module.css';
import userPhoto from '../../assets/img/user.png';
import { NavLink } from 'react-router-dom';

let User = ({user, followingInProgress, unfollow, follow}) => {
    return <div>
        <div>
            {user.name}
        </div>
        <div>
            {user.status}
        </div>
        <div>
            {'user.location.country'}
        </div>
        <div>
            {'user.location.city'}
        </div>
        <div>
            <NavLink to={'/mainpage/' + user.id}>
                <img src={ user.photos.small != null ? user.photos.small : userPhoto } className={classes.userPhoto} alt='User' />
            </NavLink>
        </div>
        <div>
            { user.followed 
            ? <button disabled={followingInProgress
                .some(id => id === user.id)} onClick={ () => { 
                unfollow(user.id)
            }}>Unfollow</button> 
            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => { 
                follow(user.id)
            }}>Follow</button>}
        </div>
    </div>
}

export default User;