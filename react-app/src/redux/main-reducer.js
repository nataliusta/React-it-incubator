import {usersAPI, profileAPI} from '../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profile: null, // as long as a user's profile is not created and initialized
    status: ''
};

const mainReducer = (state = initialState, action) => {
    
    switch(action.type) {
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

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

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