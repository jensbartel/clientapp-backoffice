import { ADMIN_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types';

const authReducer = (state, action) => {
    switch (action.type) {
        case ADMIN_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                admin: action.payload,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            };
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                admin: null,
                error: action.payload,
            };
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                admin: null,
                error: null,
            };
        case CLEAR_ERRORS:
            if (!action.payload) {
                // console.log('no payload');
                return {
                    ...state,
                    error: null,
                };
            }

            let errFiltered = null;

            if (state.error) {
                errFiltered = action.payload.forEach(item => state.error.filter(err => err.id !== item));
                if (errFiltered === undefined) {
                    errFiltered = null;
                }

                console.log('errFiltered', errFiltered);
            }

            return {
                ...state,
                error: errFiltered,
                // error: state.error.filter(err => err.id !== action.payload[0]),

                // error: action.payload.forEach(item => state.error.filter(err => err.id !== item)),
            };
        default:
            return state;
    }
};

export default authReducer;
