import React, {useState, useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const LOGGED_IN = '1';
const LOGGED_OUT = '0';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', LOGGED_IN);
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };

    useEffect(() => {
        const storedLoginInfo = localStorage.getItem('isLoggedIn');

        if (storedLoginInfo === LOGGED_IN) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler}/>}
                {isLoggedIn && <Home onLogout={logoutHandler}/>}
            </main>
        </React.Fragment>
    );

}

export default App;
