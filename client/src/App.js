import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthState from './context/auth/AuthState';
import ClientsState from './context/clients/ClientsState';
import CsvState from './context/csv/CsvState';
import UsersState from './context/users/UsersState';
import setAuthToken from './utils/setAuthToken';

import './App.css';
import ClientsAll from './components/ClientsAll';
import ClientsOverview from './components/ClientsOverview';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    return (
        <div className='App'>
            <AuthState>
                <UsersState>
                    <ClientsState>
                        <CsvState>
                            <Router>
                                <div className='wrapper'>
                                    <Header />
                                    <Switch>
                                        <PrivateRoute exact path='/' component={Home} />
                                        <PrivateRoute exact path='/clients' component={ClientsOverview} />
                                        <PrivateRoute exact path='/all' component={ClientsAll} />
                                        <Route exact path='/login' component={Login} />
                                    </Switch>
                                    <Footer />
                                </div>
                            </Router>
                        </CsvState>
                    </ClientsState>
                </UsersState>
            </AuthState>
        </div>
    );
};

export default App;

// const collapseHeader = () => {
//     const y = window.scrollY;
//     const header = document.getElementById('header')
//     const logo = document.getElementById('logo');

//     console.log(y);

//     if(y > 50) {
//         // console.log("Y position 1: ", y);
//         // logo.style.padding = '0';
//         // header.style.minHeight = '75px';
//     } else {
//         logo.style.padding = '3rem 0';
//         header.classList.remove('collapsed');
//         header.style.minHeight = '176px';
//     }

// }

// window.addEventListener('scroll', collapseHeader);
