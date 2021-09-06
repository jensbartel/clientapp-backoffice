import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UsersContext from '../context/users/usersContext';
import ClientsContext from '../context/clients/clientsContext';
import CsvContext from '../context/csv/csvContext';

const Users = () => {
    const usersContext = useContext(UsersContext);
    const clientsContext = useContext(ClientsContext);
    const csvContext = useContext(CsvContext);

    const { users, getUsers, loading } = usersContext;
    const { getClients, clients } = clientsContext;
    const { generateCsv } = csvContext;

    useEffect(() => {
        getUsers();
        getClients();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (clients) {
            generateCsv(clients);
        }
        // eslint-disable-next-line
    }, [clients]);

    return (
        <>
            {users !== null && !loading && (
                <div className='container'>
                    <div className='user-grid'>
                        {users.map(user => (
                            <Link key={user._id} to={{ pathname: 'clients', state: { user: user } }}>
                                <div>{user.name}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Users;
