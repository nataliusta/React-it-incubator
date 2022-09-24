const ADD_MESSAGE = 'ADD-MESSAGE';

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
}

const forumReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: action.newTextMessage
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        }
        default:
            return state; 
    }
};

export const addMessageActionCreator = (newTextMessage) => ({type: ADD_MESSAGE, newTextMessage}) // function that returns an object (action) with a type

export default forumReducer;