import React from 'react';
import Forum from './Forum.js';
import {addMessageActionCreator, updateNewTextMessageActionCreator} from '../../redux/forum-reducer';

const ForumContainer = (props) => {
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewTextMessageActionCreator(text);
        props.store.dispatch(action);
    }

    return (<Forum updateNewTextMessage={onMessageChange} addMessage={addMessage} dialogsData={props.dialogsData} messagesData={props.messagesData} />)
}

export default ForumContainer;