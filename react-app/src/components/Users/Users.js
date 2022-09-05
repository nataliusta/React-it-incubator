import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = this.props.totalUsersCount / this.props.pageSize;
        return (
            <div>
                <div>
                    <span>1</span>
                    <span className ={classes.selectedPage}>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
               {
                this.props.users.map( u => <div key={u.id}>
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
                        <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={classes.userPhoto} />
                    </div>
                    <div>
                        { u.followed 
                        ? <button onClick={ () => { this.props.unfollow(u.id) } }>Unfollow</button> 
                        : <button onClick={ () => { this.props.follow(u.id) } }>Follow</button>}
                    </div>
                </div> )
               }
            </div>
        )

    }
}

export default Users;