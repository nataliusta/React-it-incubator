import {combineReducers, createStore} from 'redux';
//import {combineReducers, legacy_createStore as createStore} from "redux";
import mainReducer from './main-reducer';
import forumReducer from './forum-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({ // = state
    mainPage: mainReducer,
    forumPage: forumReducer,
    usersPage: usersReducer
});

let store = createStore(reducers); // pass reducers to the store

window.store = store;

export default store;