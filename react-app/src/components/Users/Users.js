import React from 'react';
import Pagination from './Pagination';
import User from './User';

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        <Pagination currentPage={currentPage} 
                    onPageChanged={onPageChanged}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize} />
        <div>
            {
                users.map( u => <User user={u} 
                                    followingInProgress={props.followingInProgress} 
                                    unfollow={props.unfollow}
                                    follow={props.follow}
                                    key={u.id} />
                )
            }
        </div>
    </div>
}

export default Users;