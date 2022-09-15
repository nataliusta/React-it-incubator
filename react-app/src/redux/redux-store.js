import {applyMiddleware, combineReducers, createStore} from 'redux';
//import {combineReducers, legacy_createStore as createStore} from "redux";
import mainReducer from './main-reducer';
import forumReducer from './forum-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({ // = state
    mainPage: mainReducer,
    forumPage: forumReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // pass reducers to the store

window.store = store;

export default store;