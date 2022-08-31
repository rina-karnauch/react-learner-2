import React from 'react';
import * as logoImg from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={logoImg} alt="food table with various meals"/>
            </div>
        </React.Fragment>
    );
}

export default Header;