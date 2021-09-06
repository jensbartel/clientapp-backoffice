import { useReducer } from 'react';
import UsersContext from './usersContext';
import usersReducer from './usersReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import { CLEAR_USERS, GET_USERS, USERS_ERROR, SET_CURRENT } from '../types';

const UsersState = props => {
    const initialState = {
        users: null,
        error: null,
        currentUser: null,
    };

    const [state, dispatch] = useReducer(usersReducer, initialState);

    // functions
    const getUsers = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        try {
            const res = await axios.get('/api/users');
            dispatch({ type: GET_USERS, payload: res.data });
        } catch (err) {
            dispatch({
                type: USERS_ERROR,
                payload: err.response.msg,
            });
        }
    };

    const setCurrentUser = current => {
        dispatch({
            type: SET_CURRENT,
            payload: current,
        });
    };

    const clearUsers = () => {
        dispatch({ type: CLEAR_USERS });
    };

    return (
        <UsersContext.Provider
            value={{
                users: state.users,
                error: state.error,
                currentUser: state.currentUser,
                getUsers,
                clearUsers,
                setCurrentUser,
            }}
        >
            {props.children}
        </UsersContext.Provider>
    );
};

export default UsersState;
