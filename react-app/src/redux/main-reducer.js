import {usersAPI, profileAPI} from '../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => { // thunk function
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => { // getStatus thunk function
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => { // updateStatus thunk function
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => { // updateStatus thunk function
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(file));
    }
}

export default mainReducer;