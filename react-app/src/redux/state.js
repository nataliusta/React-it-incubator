import { rerenderEntireTree } from '../render.js';

let state = {
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
}

window.state = state;

export let addComment = () => {
  let newMessage = {
      id: 6,
      message: state.forumPage.newTextComment
  };
    state.forumPage.messagesData.push(newMessage);
    state.forumPage.newTextComment = '';
    rerenderEntireTree(state);
}

export let updateNewTextComment = (newComment) => {
    state.forumPage.newTextComment = newComment;
    rerenderEntireTree(state);
}
  
  export default state;