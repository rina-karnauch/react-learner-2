import React from 'react';
import logoImg from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={logoImg} alt="food table with various meals"/>
            </div>
        </React.Fragment>
    );
}

export default Header;