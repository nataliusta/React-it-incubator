const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
       /* {id: 1, followed: false, fullName: 'Mike', status: 'Hey guys!', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Andrew', status: 'The happiest', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 3, followed: false, fullName: 'Kate', status: 'Married and happy', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 4, followed: false, fullName: 'Sally', status: 'Love Chanel!', location: {city: 'Minsk', country: 'Belarus'}}, */
      ],
}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
        return {
            ...state,
            //users: [...state.users]
            users: state.users.map( callback u => { // makes copy of users
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u;

            })
        }

        case UNFOLLOW:
        return {
            ...state,
            //users: [...state.users]
            users: state.users.map( callback u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u;

            })
        }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users] // incoming users that we get from the action and pass them to the state

            }

        default:
            return state; 
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId}) 
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users}) // gets any users from the server and sets them to the state

export default usersReducer;