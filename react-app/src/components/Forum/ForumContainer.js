//import React from 'react';
import Forum from './Forum.js';
import {addMessageActionCreator, updateNewTextMessageActionCreator} from '../../redux/forum-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => { // function that returns an object with datas from state
    return {
        dialogsData: state.forumPage.dialogsData,
        messagesData: state.forumPage.messagesData,
        newTextMessage: state.forumPage.newTextMessage
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Forum);