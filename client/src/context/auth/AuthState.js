import { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import { ADMIN_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        loading: true,
        admin: null,
        error: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // load admin
    const loadAdmin = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        try {
            const res = await axios.get('/api/auth');
            dispatch({
                type: ADMIN_LOADED,
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
            });
        }
    };

    // login admin
    const login = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const res = await axios.post('/api/auth', formData, config);
            clearErrors();
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
            // loadAdmin();
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.errors,
            });

            // console.log(err.response.data.errors.map(err => err.id));
            // setTimeout(
            //     () =>
            //         dispatch({
            //             type: CLEAR_ERRORS,
            //             payload: err.response.data.errors.map(err => err.id),
            //         }),
            //     4000
            // );
            setTimeout(() => clearErrors(), 5000);
            // clearErrors();
        }
    };

    // logout admin
    const logout = () => {
        dispatch({ type: LOGOUT });
    };

    // clear errors
    const clearErrors = () => {
        dispatch({ type: CLEAR_ERRORS });
    };

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                admin: null,
                error: state.error,
                loadAdmin,
                login,
                logout,
                clearErrors,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
