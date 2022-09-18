//import React from 'react';
import Forum from './Forum.js';
import {addMessageActionCreator, updateNewTextMessageActionCreator} from '../../redux/forum-reducer';
import {connect} from 'react-redux';

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

const ForumContainer = connect(mapStateToProps, mapDispatchToProps) (Forum);

export default ForumContainer;