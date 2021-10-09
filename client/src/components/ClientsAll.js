import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import ClientsContext from '../context/clients/clientsContext';
import UsersContext from '../context/users/usersContext';
import CsvContext from '../context/csv/csvContext';
import Menu from './Menu';

const ClientsAll = props => {
    const authContext = useContext(AuthContext);
    const usersContext = useContext(UsersContext);
    const clientsContext = useContext(ClientsContext);
    const csvContext = useContext(CsvContext);

    const { loadAdmin } = authContext;
    const { users, getUsers, setCurrentUser, currentUser } = usersContext;
    const { clients, getClients, loading } = clientsContext;
    const { generateCsv } = csvContext;

    useEffect(() => {
        loadAdmin();
        getUsers();
        getClients();
        if (currentUser !== null) {
            setCurrentUser(null);
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (clients) {
            generateCsv(clients);
        }
        // eslint-disable-next-line
    }, []);

    const filteredClients = user => {
        return clients.filter(item => item._partition === user._partition);
    };

    return (
        <>
            <Menu />
            {clients !== null && users !== null && !loading && (
                <div className='clients-container'>
                    {users.length === 0 ? (
                        <div>No users on file.</div>
                    ) : (
                        <>
                            {users.map(user =>
                                filteredClients(user).length !== 0 ? (
                                    <div key={user._id} className='view-all'>
                                        <div className='clients-table'>User: {user.name}</div>
                                        {filteredClients(user).map(client => (
                                            <div key={client._id} className='clients-table'>
                                                <div>{client.clientName}</div>
                                                <div className='client-hide'>{client.email}</div>
                                                <div className='client-hide'>{client.company}</div>
                                                <div className='client-hide'>{client.position}</div>
                                                <div>{client.country}</div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div key={user.name} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                                        No clients on file for <strong>{user.name}</strong>.
                                    </div>
                                )
                            )}
                        </>
                    )}
                    <div className='back-to-top'>
                        <Link to='/'>↑ Back to Top</Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default ClientsAll;
