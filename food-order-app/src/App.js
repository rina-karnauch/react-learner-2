import React, {useState} from 'react';
import Header from './components/Layout/Header.js';
import Meals from "./components/Meals/Meals.js";
import Cart from './components/Cart/Cart.js';
import CartProvider from "./store/CartProvider.js";

function App() {

    const [isCartShown, setIsCartShown] = useState(false);

    const showCartHandler = () => {
        setIsCartShown(true);
    };

    const hideCartHandler = () => {
        setIsCartShown(false);
    }


    return (
        <CartProvider>
            {isCartShown && <Cart onClose={hideCartHandler}/>}
            <Header
                onShowCart={showCartHandler}
            />
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
