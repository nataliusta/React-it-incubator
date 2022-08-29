const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE'; // action's name

let initialState = {
    dialogsData: [
        {id: 'samanta', name: 'Samanta'},
        {id: 'alexa', name: 'Alexa'},
        {id: 'olivia', name: 'Olivia'},
        {id: 'chloe', name: 'Chloe'},
        {id: 'emily', name: 'Emily'},
        {id: 'carla', name: 'Carla'},
        {id: 'jess', name: 'Jess'},
        {id: 'sophie', name: 'Sophie'}
      ],
    messagesData: [
        {id: 1, message: 'Definitely in love with my lipstick!!!'},
        {id: 2, message: 'Hello,could you advice me a good perfume?'},
        {id: 3, message: 'What do you think about Chanel products?'},
        {id: 4, message: 'Hello everyone!!!'},
        {id: 5, message: 'Not sure I liked Chanel Coco Mademoiselle....'}
      ],
    newTextMessage: 'Write new message..'
}

const forumReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newTextMessage
            };
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newTextMessage = '';
            return stateCopy;
        }
        case UPDATE_NEW_TEXT_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.newTextMessage = action.newMessage;
            return stateCopy;  
        }
        default:
            return state; 
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE}) // function that returns an object (action) with a type
export const updateNewTextMessageActionCreator = (text) =>  // function that returns an object (action) with a type 
    ({type: UPDATE_NEW_TEXT_MESSAGE, newMessage: text})

export default forumReducer;