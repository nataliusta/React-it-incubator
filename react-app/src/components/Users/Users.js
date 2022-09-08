import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/img/user.png';
import { NavLink } from "react-router-dom";

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
                <NavLink to={'/profile/' + u.id}>
                    <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={classes.userPhoto} />
                </NavLink>
            </div>
            <div>
                { u.followed 
                ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button> 
                : <button onClick={ () => { props.follow(u.id) } }>Follow</button>}
            </div>
        </div> )
        }
    </div>
}

export default Users;