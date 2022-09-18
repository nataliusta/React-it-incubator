//import React from 'react';
import Forum from './Forum.js';
import {addMessageActionCreator, updateNewTextMessageActionCreator} from '../../redux/forum-reducer';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';

let mapStateToProps = (state) => { // function that returns an object with datas from state
    return {
        dialogsData: state.forumPage.dialogsData,
        messagesData: state.forumPage.messagesData,
        newTextMessage: state.forumPage.newTextMessage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => { // contains an object with callbacks 
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewTextMessage: (text) => {
            let action = updateNewTextMessageActionCreator(text);
            dispatch(action);
        },
    } 
}

const AuthRedirectComponent = (props) => {
    if (!this.props.isAuth) return <Navigate to='/login' />;
    return <Forum {...props} />
}

const ForumContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default ForumContainer;