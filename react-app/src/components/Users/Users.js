import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/img/user.png';
import { NavLink } from "react-router-dom";
import {usersAPI} from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage} 
                onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
        {
        props.users.map( u => <div key={u.id}>
            <div>
                {u.name}
            </div>
            <div>
                {u.status}
            </div>
            <div>
                {'u.location.country'}
            </div>
            <div>
                {'u.location.city'}
            </div>
            <div>
                <NavLink to={'/mainpage/' + u.id}>
                    <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={classes.userPhoto} alt='User' />
                </NavLink>
            </div>
            <div>
                { u.followed 
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => { 
                    props.toggleFollowingProgress(true, u.id);
                    usersAPI.unfollow(u.id)
                        .then(response => {
                            if (response.data.resultCode == 0) {
                                props.unfollow(u.id); 
                            }
                            props.toggleFollowingProgress(false, u.id);
                        });
                }}>Unfollow</button> 
                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => { 
                    props.toggleFollowingProgress(true, u.id);
                    usersAPI.follow(u.id)
                        .then(response => {
                            if (response.data.resultCode == 0) {
                                props.follow(u.id);
                            }
                            props.toggleFollowingProgress(false, u.id);
                        });

                }}>Follow</button>}
            </div>
        </div> )
        }
    </div>
}

export default Users;