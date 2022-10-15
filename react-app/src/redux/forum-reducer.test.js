import forumReducer, {addMessageActionCreator} from './forum-reducer';

let state = {
    messagesData: [
        {id: 1, message: 'Definitely in love with my lipstick!!!'},
        {id: 2, message: 'Hello,could you advice me a good perfume?'},
        {id: 3, message: 'What do you think about Chanel products?'},
        {id: 4, message: 'Hello everyone!!!'},
        {id: 5, message: 'Not sure I liked Chanel Coco Mademoiselle....'}
      ],
}

test('length of messages should be incremented', () => {
    let action = addMessageActionCreator('Do you remember me?'); // 1. test start data
    let newState = forumReducer(state, action); // 2. action
    expect(newState.messagesData.length).toBe(6); // 3. expectation
  });