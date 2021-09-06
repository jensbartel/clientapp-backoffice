import { useContext, useEffect } from 'react';
import Menu from './Menu';
import Users from './Users';
import AuthContext from '../context/auth/authContext';
import UsersContext from '../context/users/usersContext';

const Home = () => {
    const authContext = useContext(AuthContext);
    const usersContext = useContext(UsersContext);

    const { loadAdmin } = authContext;
    const { setCurrentUser, currentUser } = usersContext;

    useEffect(() => {
        loadAdmin();
        if (currentUser !== null) {
            setCurrentUser(null);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Menu />
            <Users />
        </>
    );
};

export default Home;
