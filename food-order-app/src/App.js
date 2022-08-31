import React from 'react';
import Header from './components/Layout/Header.js';
import Meals from "./components/Meals/Meals.js";
import Cart from './components/Cart/Cart.js';

function App() {
    return (
        <React.Fragment>
            <Cart/>
            <Header/>
            <Meals/>
        </React.Fragment>
    );
}

export default App;
