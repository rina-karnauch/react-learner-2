import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm.js'
import {useContext} from "react";
import CartContext from "../../../store/cartContext";

const MealItem = (props) => {

    const cartCTX = useContext(CartContext);

    const itemPrice = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCTX.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };

    return (
        <li className={classes.meal}>
            <div className={classes['meal-info']}>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{itemPrice}</div>
            </div>
            <div className={classes['meal-form']}>
                <button className={classes['delete-btn']}>
                    delete
                </button>
            </div>
            <div className={classes['meal-form']}>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default MealItem;