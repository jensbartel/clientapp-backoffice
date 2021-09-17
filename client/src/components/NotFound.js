import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <>
            <div className='not-found'>
                <h3>Page not found.</h3>
            </div>
            <div style={{ margin: '0.5rem 12.5% 0' }}>
                <Link to='/'>↑ Back to Top</Link>
            </div>
        </>
    );
};

export default NotFound;
