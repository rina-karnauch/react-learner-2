import classes from './Cart.module.css';
import {useContext} from "react";
import Modal from '../UI/Modal.js';
import CartItem from './CartItem/CartItem.js';
import CartContext from "../../store/cartContext";

const Cart = (props) => {

    const cartCTX = useContext(CartContext);

    const totalAmount = `${cartCTX.totalAmount.toFixed(2)}$`;
    const hasItems = cartCTX.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCTX.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCTX.addItem({...item, amount: 1});
    }

    const cartItems = <ul className={classes['cart-items']}>
        {cartCTX.items.map((item) => {
            return (<CartItem
                name={item.name}
                amount={item.amount}
                price={item.price}
                key={item.id}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            >
            </CartItem>)
        })}</ul>;
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount:</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes['button--alt']}
                    onClick={props.onClose}
                >
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );

};

export default Cart;