import { useContext } from 'react';
import AuthContext from '../context/auth/authContext';

const Alerts = () => {
    const authContext = useContext(AuthContext);
    const { error } = authContext;

    return error !== null && <div style={{ margin: 'auto', fontSize: '0.8rem' }}>{error[0].msg}</div>;
};

export default Alerts;
