import mainReducer from './main-reducer';
import forumReducer from './forum-reducer';
import commentsReducer from './comments-reducer';

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
    dispatch(action) { // a method,{type: 'ADD-MESSAGE'}..state changed throught dispatch actions

      this._state.mainPage = mainReducer(this._state.mainPage, action);
      this._state.mainPage = commentsReducer(this._state.comments, action);
      this._state.forumPage = forumReducer(this._state.forumPage, action);

      this._callSubscriber(this._state);
    }
}

//window.store = store;
export default store;