import { useReducer } from 'react';
import ClientsContext from './clientsContext';
import clientsReducer from './clientsReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import { GET_CLIENTS, DELETE_CLIENTS, CLIENTS_ERROR, CLEAR_CLIENTS } from '../types';

const ClientState = props => {
    const initialState = {
        clients: null,
        error: null,
        loading: true,
    };

    const [state, dispatch] = useReducer(clientsReducer, initialState);

    // get clients
    const getClients = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        try {
            const res = await axios.get('/api/clients');
            dispatch({ type: GET_CLIENTS, payload: res.data });
        } catch (err) {
            dispatch({
                type: CLIENTS_ERROR,
                payload: err.response.msg,
            });
        }
    };

    // delete clients
    const deleteClients = async () => {
        await axios.delete('/api/clients');
        dispatch({ type: DELETE_CLIENTS });
    };

    const clearClients = () => {
        dispatch({ type: CLEAR_CLIENTS });
    };

    return (
        <ClientsContext.Provider
            value={{
                clients: state.clients,
                error: state.error,
                getClients,
                deleteClients,
                clearClients,
            }}
        >
            {props.children}
        </ClientsContext.Provider>
    );
};

export default ClientState;
