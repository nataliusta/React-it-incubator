import React from 'react';
import Forum from './Forum.js';
import {addMessageActionCreator, updateNewTextMessageActionCreator} from '../../redux/forum-reducer';
import StoreContext from '../../StoreContext.js';

const ForumContainer = () => {

    return <StoreContext.Consumer> 
        { store => {
            
            let state = store.getState();

            let addMessage = () => {
                store.dispatch(addMessageActionCreator());
            }
        
            let onMessageChange = (text) => {
                let action = updateNewTextMessageActionCreator(text);
                store.dispatch(action);
            }

            return <Forum updateNewTextMessage={onMessageChange} 
                        addMessage={addMessage} 
                        dialogsData={state.forumPage.dialogsData} 
                        messagesData={state.forumPage.messagesData} 
                        newTextMessage={state.forumPage.newTextMessage} />
        }
    }
    </StoreContext.Consumer>
}

export default ForumContainer;