import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import ClientsContext from '../context/clients/clientsContext';
import UsersContext from '../context/users/usersContext';
import CsvContext from '../context/csv/csvContext';
import Menu from './Menu';

const ClientsOverview = props => {
    const authContext = useContext(AuthContext);
    const clientsContext = useContext(ClientsContext);
    const usersContext = useContext(UsersContext);
    const csvContext = useContext(CsvContext);

    const { loadAdmin } = authContext;
    const { clients, loading, getClients } = clientsContext;
    const { users, getUsers, setCurrentUser, currentUser } = usersContext;
    const { generateCsv, generateCsvForOne } = csvContext;

    useEffect(() => {
        loadAdmin();
        getUsers();
        getClients();
        if (props.location.state) {
            setCurrentUser(props.location.state.user.name);
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (clients) {
            generateCsv(clients);
        }
        if (clients && users && currentUser) {
            const currentUserLocal = users.filter(item => item.name === currentUser)[0];
            const filtered = clients.filter(item => item._partition === currentUserLocal._partition);
            generateCsvForOne(filtered, currentUserLocal.name);
        }
        // eslint-disable-next-line
    }, [clients, users]);

    let currentUserLocal;
    let filtered = [];

    if (clients && users && currentUser !== null) {
        currentUserLocal = users.filter(item => item.name === currentUser)[0];
        filtered = clients.filter(item => item._partition === currentUserLocal._partition);
    }

    return (
        <>
            <Menu />
            {clients !== null && users !== null && !loading && currentUser !== null && (
                <div className='clients-container'>
                    {filtered.length === 0 ? (
                        <div style={{ marginBottom: '2rem' }}>
                            No clients on file for <strong>{currentUserLocal.name}.</strong>
                        </div>
                    ) : (
                        <>
                            <div className='clients-table'>User: {currentUserLocal.name}</div>
                            {filtered.map(client => (
                                <div key={client._id} className='clients-table'>
                                    <div className=''>{client.clientName}</div>
                                    <div className=''>{client.email}</div>
                                    <div className=''>{client.company}</div>
                                    <div className=''>{client.position}</div>
                                    <div className=''>{client.country}</div>
                                </div>
                            ))}
                        </>
                    )}
                    <div style={{ marginTop: '1rem' }}>
                        <Link to='/'>↑ Back to Top</Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default ClientsOverview;
