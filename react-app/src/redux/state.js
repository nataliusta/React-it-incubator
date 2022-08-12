const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE'; // action's name
const SEND_COMMENT = 'SEND-COMMENT';
const UPDATE_NEW_COMMENT_BODY= 'UPDATE-NEW-COMMENT-BODY';

let store = {
    _state: { // private
      forumPage: {
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
      },
      mainPage: {
          commentsData: [
            {id: 1, comment: 'Hello'},
            {id: 2, comment: 'I love you so much!'}
          ],
        newCommentBody: '' // empty string to be changed
      }
    },
    _callSubscriber() { // method
      console.log('hello');
    },
    getState() {
      return this._state;
    },
    subscribe(observer) { // pattern
      this._callSubscriber = observer;
    }, // method
    dispatch(action) { // {type: 'ADD-MESSAGE'}..state changed throught dispatch actions
      if (action.type === ADD_MESSAGE) {
          let newMessage = {
            id: 6,
            message: this._state.forumPage.newTextMessage
          };
          this._state.forumPage.messagesData.push(newMessage);
          this._state.forumPage.newTextMessage = '';
          this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_TEXT_MESSAGE) {
          this._state.forumPage.newTextMessage = action.newMessage;
          this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_COMMENT_BODY) {
          this._state.mainPage.newCommentBody = action.body;
          this._callSubscriber(this._state); // informs UI about changes and updates it
      } else if (action.type === SEND_COMMENT) {
          let body = this._state.mainPage.newCommentBody;
          this._state.mainPage.newCommentBody = '';
          this._state.mainPage.commentsData.push({id: 3, comment: body});
          this._callSubscriber(this._state);
      }
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE}) // function that returns an object (action) with a type
export const updateNewTextMessageActionCreator = (text) =>  // function that returns an object (action) with a type 
    ({type: UPDATE_NEW_TEXT_MESSAGE, newMessage: text})

export const addCommentCreator = () => ({type: SEND_COMMENT}) 
export const updateNewCommentBodyCreator = (body) =>
    ({type: UPDATE_NEW_COMMENT_BODY, body: body})

//window.store = store;
export default store;