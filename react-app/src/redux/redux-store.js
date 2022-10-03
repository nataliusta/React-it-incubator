import {applyMiddleware, combineReducers, createStore} from 'redux';
//import {combineReducers, legacy_createStore as createStore} from "redux";
import mainReducer from './main-reducer';
import forumReducer from './forum-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import commentsReducer from './comments-reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({ // = state
    mainPage: mainReducer,
    forumPage: forumReducer,
    usersPage: usersReducer,
    auth: authReducer,
    comments: commentsReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // pass reducers to the store

window.store = store;

export default store;