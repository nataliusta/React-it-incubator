import React from 'react';
import {connect} from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer.js';
import Users from './Users.js';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUser: (users) => {
            dispatch(setUsersAC(users));
        },

    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);