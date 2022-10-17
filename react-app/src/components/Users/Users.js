import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/img/user.png';
import { NavLink } from 'react-router-dom';
import Pagination from './Pagination';

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        <Pagination currentPage={currentPage} 
                    onPageChanged={onPageChanged}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize} />
        {
        users.map( u => <div key={u.id}>
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
                ? <button disabled={props.followingInProgress
                    .some(id => id === u.id)} onClick={ () => { 
                    props.unfollow(u.id)
                }}>Unfollow</button> 
                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => { 
                    props.follow(u.id)
                }}>Follow</button>}
            </div>
        </div> )
        }
    </div>
}

export default Users;