import {usersAPI, profileAPI} from '../api/api';

const SEND_COMMENT = 'SEND-COMMENT';
const UPDATE_NEW_COMMENT_BODY = 'UPDATE-NEW-COMMENT-BODY';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    commentsData: [
      {id: 1, comment: 'Hello'},
      {id: 2, comment: 'I love you so much!'}
    ],
    newCommentBody: '', // empty string to be changed
    profile: null, // as long as a user's profile is not created and initialized
    status: ''
};

const mainReducer = (state = initialState, action) => {

    let stateCopy;
    
    switch(action.type) {
        case UPDATE_NEW_COMMENT_BODY:
            stateCopy = {
                ...state,
                newCommentBody: action.body
            };
            return stateCopy;
        case SEND_COMMENT:
            let body = state.newCommentBody;
            stateCopy = {
                ...state,
                newCommentBody: ''
            };
            stateCopy.commentsData.push({id: 3, comment: body});
            return stateCopy;
        case SET_USER_PROFILE: {
            return {
                ...state, 
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, 
                status: action.status
            }
        }

        default:
            return state;
    }
};

export const addCommentCreator = () => ({type: SEND_COMMENT});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const updateNewCommentBodyCreator = (body) =>
    ({type: UPDATE_NEW_COMMENT_BODY, body: body});

export const getUserProfile = (userId) => (dispatch) => { // thunk function
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};

export const getStatus = (userId) => (dispatch) => { // getStatus thunk function
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => { // updateStatus thunk function
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
        }
    });
}

export default mainReducer;