const SEND_COMMENT = 'SEND-COMMENT';
const UPDATE_NEW_COMMENT_BODY= 'UPDATE-NEW-COMMENT-BODY';

const mainReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_NEW_COMMENT_BODY:
            state.newCommentBody = action.body;
            return state;
        case SEND_COMMENT:
            let body = state.newCommentBody;
            state.newCommentBody = '';
            state.commentsData.push({id: 3, comment: body});
            return state;
        default:
            return state;
    }
};

export const addCommentCreator = () => ({type: SEND_COMMENT}) 
export const updateNewCommentBodyCreator = (body) =>
    ({type: UPDATE_NEW_COMMENT_BODY, body: body})

export default mainReducer;