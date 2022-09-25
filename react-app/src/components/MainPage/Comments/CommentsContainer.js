//import React from 'react';
import Comments from './Comments';
import {addCommentCreator} from '../../../redux/comments-reducer';
import {connect} from 'react-redux';
//import {withAuthRedirect} from '../../hoc/withAuthRedirect';
//import { compose } from 'redux';

let mapStateToProps = (state) => { // function that returns an object with datas from state
    
    return {
        commentsData: state.comments.commentsData,
        newCommentBody: state.mainPage.newCommentBody
    }
}

let mapDispatchToProps = (dispatch) => { // contains an object with callbacks 
    return {
        addComment: (newCommentBody) => {
            dispatch(addCommentCreator(newCommentBody));
        }
    } 
}

const CommentsContainer = connect(mapStateToProps, mapDispatchToProps) (Comments);

export default CommentsContainer;