const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_NEW_TEXT_COMMENT = 'UPDATE-NEW-TEXT-COMMENT';

let store = {
    _state: {
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
          newTextComment: 'Write new comment..'
      }
    }, // private
    _callSubscriber() { // method
      console.log('hello');
    },
    getState() {
      return this._state;
    },
    subscribe(observer) {
      this._callSubscriber = observer;
    }, // method
    dispatch(action) { // {type: 'ADD-COMMENT'}
      if (action.type === ADD_COMMENT) {
          let newMessage = {
            id: 6,
            message: this._state.forumPage.newTextComment
          };
          this._state.forumPage.messagesData.push(newMessage);
          this._state.forumPage.newTextComment = '';
          this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_TEXT_COMMENT) {
          this._state.forumPage.newTextComment = action.newComment;
          this._callSubscriber(this._state);
      }
    }
}

export const addCommentActionCreator = () => ({type: ADD_COMMENT})  // function that returns an object (action) with a type
export const updateNewTextCommentActionCreator = (text) =>  // function that returns an object (action) with a type 
    ({type: UPDATE_NEW_TEXT_COMMENT, newComment: text})

//window.store = store;
export default store;