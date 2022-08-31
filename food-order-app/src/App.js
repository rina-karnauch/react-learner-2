import React, {useState} from 'react';
import Header from './components/Layout/Header.js';
import Meals from "./components/Meals/Meals.js";
import Cart from './components/Cart/Cart.js';

function App() {

    const [isCartShown, setIsCartShown] = useState(false);

    const showCartHandler = () => {
        setIsCartShown(true);
    };

    const hideCartHandler = () => {
        setIsCartShown(false);
    }

    return (
        <React.Fragment>
            {isCartShown && <Cart onClose={hideCartHandler}/>}
            <Header
                onShowCart={showCartHandler}
            />
            <main>
                <Meals/>
            </main>
        </React.Fragment>
    );
}

export default App;
