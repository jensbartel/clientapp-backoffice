import Logo from '../img/shibunkaku_logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/auth/authContext';

const Header = () => {
    const authContext = useContext(AuthContext);
    const { clearErrors } = authContext;

    return (
        <>
            <div className='chrome-patch'></div>
            <div className='header' id='header'>
                <Link to='/'>
                    <img src={Logo} alt='' className='logo' id='logo' onClick={() => clearErrors()} />
                </Link>
            </div>
        </>
    );
};

export default Header;
