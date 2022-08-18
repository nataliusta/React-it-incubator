const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE'; // action's name

const forumReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newTextMessage
            };
            state.messagesData.push(newMessage);
            state.newTextMessage = '';
            return state;
        case UPDATE_NEW_TEXT_MESSAGE:
            state.newTextMessage = action.newMessage;
            return state;  
        default:
            return state; 
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE}) // function that returns an object (action) with a type
export const updateNewTextMessageActionCreator = (text) =>  // function that returns an object (action) with a type 
    ({type: UPDATE_NEW_TEXT_MESSAGE, newMessage: text})

export default forumReducer;