import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/img/user.png';
import { NavLink } from "react-router-dom";
import * as axios from 'axios';

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
                ? <button onClick={ () => { 

                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': '23f0d013-825b-4922-8b88-0221bfa9c74a'
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode == 0) {
                                props.unfollow(u.id); 
                            }
                        });

                }}>Unfollow</button> 
                : <button onClick={ () => { 

                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': '23f0d013-825b-4922-8b88-0221bfa9c74a'
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode == 0) {
                                props.follow(u.id);
                            }
                        });

                }}>Follow</button>}
            </div>
        </div> )
        }
    </div>
}

export default Users;