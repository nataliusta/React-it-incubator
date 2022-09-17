import {usersAPI} from '../api/api';

const SEND_COMMENT = 'SEND-COMMENT';
const UPDATE_NEW_COMMENT_BODY = 'UPDATE-NEW-COMMENT-BODY';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    commentsData: [
      {id: 1, comment: 'Hello'},
      {id: 2, comment: 'I love you so much!'}
    ],
    newCommentBody: '', // empty string to be changed
    profile: null // as long as a user's profile is not created and initialized
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

        default:
            return state;
    }
};

export const addCommentCreator = () => ({type: SEND_COMMENT}) 
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewCommentBodyCreator = (body) =>
    ({type: UPDATE_NEW_COMMENT_BODY, body: body})

export const getUserProfile = (userId) => (dispatch) => { // thunk function
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export default mainReducer;