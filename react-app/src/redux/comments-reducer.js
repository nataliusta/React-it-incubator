const SEND_COMMENT = 'SEND-COMMENT';

let initialState = {
    commentsData: [
      {id: 1, comment: 'Hello'},
      {id: 2, comment: 'I love you so much!'}
    ]
};

const commentsReducer = (state = initialState, action) => {

    let stateCopy;
    
    switch(action.type) {
        case SEND_COMMENT:
            let body = action.newCommentBody;
            stateCopy = {
                ...state,
                newCommentBody: ''
            };
            stateCopy.commentsData.push({id: 3, comment: body});
            return stateCopy;
        default:
            return state;
    }
};

export const addCommentCreator = () => ({type: SEND_COMMENT});

export default commentsReducer;

