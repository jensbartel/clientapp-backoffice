import { useContext, useState } from 'react';
import { CSVLink } from 'react-csv';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import UsersContext from '../context/users/usersContext';
import ClientsContext from '../context/clients/clientsContext';
import CsvContext from '../context/csv/csvContext';
import Modal from 'react-modal';

const Menu = () => {
    const authContext = useContext(AuthContext);
    const usersContext = useContext(UsersContext);
    const clientsContext = useContext(ClientsContext);
    const csvContext = useContext(CsvContext);

    const { logout } = authContext;
    const { clearUsers, currentUser } = usersContext;
    const { clearClients, deleteClients } = clientsContext;
    const { csvAll, csv, todaysDate, clearCsv } = csvContext;

    const location = useLocation();

    // could this be consolidated into ONE state?
    const [dbWarning, setDbWarning] = useState(false);
    const [dbResetConfirm, setDbResetConfirm] = useState(false);
    const [dbResetComplete, setDbResetComplete] = useState(false);

    const onLogout = () => {
        logout();
        clearUsers();
        clearClients();
        clearCsv();
    };

    const onProceed = () => {
        setDbWarning(false);
        setDbResetConfirm(true);
    };

    const killDatabase = () => {
        setDbResetConfirm(false);
        setDbResetComplete(true);
        clearClients();
        clearCsv();
        deleteClients();
    };

    Modal.setAppElement('#root');

    return (
        <div className='menu'>
            {/* Not particularly happy about these modals and the */}
            {/* apparent necessity to use a constant for styles */}
            <Modal isOpen={dbWarning} onRequestClose={() => setDbWarning(false)} style={defaultModal}>
                <div className='modal-content'>
                    <h2>Warning:</h2>
                    <p>
                        Deleting all data cannot be undone.
                        <br />
                        Proceed with caution.
                    </p>
                    <button onClick={onProceed}>Proceed</button>
                    <button onClick={() => setDbWarning(false)}>Cancel</button>
                </div>
            </Modal>
            <Modal isOpen={dbResetConfirm} onRequestClose={() => setDbResetConfirm(false)} style={defaultModal}>
                <div className='modal-content'>
                    <h2>Reset database?</h2>
                    <button onClick={killDatabase}>Reset</button>
                    <button onClick={() => setDbResetConfirm(false)}>Cancel</button>
                </div>
            </Modal>
            <Modal isOpen={dbResetComplete} onRequestClose={() => setDbResetComplete(false)} style={defaultModal}>
                <div className='modal-content'>
                    <p className='move-up'>Database has been reset.</p>
                    <button onClick={() => setDbResetComplete(false)}>Close</button>
                </div>
            </Modal>

            <p>
                <Link to={'/all'}>View All</Link>
            </p>
            <p>
                <CSVLink data={csvAll} filename={`${todaysDate}_sbk-client.csv`}>
                    Download All
                </CSVLink>
            </p>
            {location.pathname === '/clients' && currentUser && (
                <p>
                    <CSVLink data={csv} filename={`${todaysDate}_sbk-client_${currentUser.split('@')[0].toUpperCase()}.csv`}>
                        Download Current
                    </CSVLink>
                </p>
            )}
            <p onClick={() => setDbWarning(true)}>Reset Database</p>
            <p>
                <button type='button' onClick={onLogout}>
                    Logout
                </button>
            </p>
        </div>
    );
};

export default Menu;

const defaultModal = {
    overlay: {
        backgroundColor: 'none',
    },
    content: {
        backgroundColor: '#d9d9d9',
        border: '1px solid #c7c7c7',
        textAlign: 'center',
        margin: 'auto',
        height: '40vh',
        width: '50vw',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
};
