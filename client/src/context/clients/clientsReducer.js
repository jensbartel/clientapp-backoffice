import { GET_CLIENTS, DELETE_CLIENTS, CLIENTS_ERROR, CLEAR_CLIENTS } from '../types';

const clientsReducer = (state, action) => {
    switch (action.type) {
        case GET_CLIENTS:
            return {
                ...state,
                clients: action.payload,
                loading: false,
            };
        case DELETE_CLIENTS:
            return {
                clients: [],
                error: null,
                loading: false,
            };
        case CLIENTS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case CLEAR_CLIENTS:
            return {
                ...state,
                clients: null,
                error: null,
            };
        default:
            return state;
    }
};

export default clientsReducer;
