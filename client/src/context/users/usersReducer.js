import { GET_USERS, USERS_ERROR, CLEAR_USERS, SET_CURRENT } from '../types';

const usersReducer = (state, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case SET_CURRENT:
            return {
                ...state,
                currentUser: action.payload,
            };
        case USERS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: null,
                error: null,
            };
        default:
            return state;
    }
};

export default usersReducer;
