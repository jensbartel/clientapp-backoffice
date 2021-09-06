import { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';
import Alerts from './Alerts';

const Login = props => {
    const authContext = useContext(AuthContext);

    const { login, isAuthenticated } = authContext;

    const [admin, setAdmin] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }
        // eslint-disable-next-line
    }, [isAuthenticated, props.history]);

    const { email, password } = admin;

    const onChange = e => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        login({
            email,
            password,
        });
    };

    return (
        <>
            <div className='dummy'></div>
            <form className='login-form' onSubmit={onSubmit}>
                <input type='text' placeholder='Email' name='email' value={email} onChange={onChange} />
                <input type='password' placeholder='Password' name='password' value={password} onChange={onChange} />
                <input className='login-btn' type='submit' value='Login' />
                <Alerts />
            </form>
        </>
    );
};

export default Login;
