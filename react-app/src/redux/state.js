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
    getState() {
      return this._state;
    },
    _callSubscriber() { // method
      console.log('hello');
    },
    addComment() {
      let newMessage = {
          id: 6,
          message: this._state.forumPage.newTextComment
      };
        this._state.forumPage.messagesData.push(newMessage);
        this._state.forumPage.newTextComment = '';
        this._callSubscriber(this._state);
    }, // method
    updateNewTextComment(newComment) {
      this._state.forumPage.newTextComment = newComment;
      this._callSubscriber(this._state);
    }, // method
    subscribe(observer) {
      this._callSubscriber = observer;
    } // method
}
//window.store = store;
export default store;