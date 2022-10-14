import React from 'react';
import commentsReducer, {addCommentCreator} from './comments-reducer';

let state = {
  commentsData: [
    {id: 1, comment: 'Hello'},
    {id: 2, comment: 'I love you so much!'}
  ]
};

test('length of comments should be incremented', () => {
  let action = addCommentCreator('Good morning'); // 1. test start data
  let newState = commentsReducer(state, action); // 2. action
  expect(newState.commentsData.length).toBe(3); // 3. expectation
});

test('added comment should be correct', () => {
  let action = addCommentCreator('Good morning');
  let newState = commentsReducer(state, action);
  expect(newState.commentsData[2].comment).toBe('Good morning');
});