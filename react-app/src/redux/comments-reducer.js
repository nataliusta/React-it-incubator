const ADD_COMMENT = 'ADD-COMMENT';

let initialState = {
    commentsData: [
      {id: 1, comment: 'Hello'},
      {id: 2, comment: 'I love you so much!'}
    ]
};

const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMMENT: {
            let newComment = {
                id: 7,
                comment: action.newCommentBody
            };
            return {
                ...state,
                commentsData: [...state.commentsData, newComment]
            };
        }
        default:
            return state;
    }
};

export const addCommentCreator = (newCommentBody) => ({type: ADD_COMMENT, newCommentBody});

export default commentsReducer;

