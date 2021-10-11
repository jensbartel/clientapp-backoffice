import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <>
            <div className='not-found-container'>
                <div className='not-found'>
                    <h3>Page not found.</h3>
                    <Link to='/'>↑ Back to Top</Link>
                </div>
            </div>
            <div></div>
        </>
    );
};

export default NotFound;
