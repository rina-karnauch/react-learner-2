import {useReducer} from 'react';
import CartContext from "./cartContext";

const CartProvider = (props) => {

        const defaultCartState = {
            items: [],
            totalAmount: 0,
        }

        const [cartState, dispatchCartAction] = useReducer((state, action) => {
            let existingCartItemIndex, updatedTotalAmount, existingCartItem, updatedItems, updatedItem;
            switch (action.type) {
                case 'ADD':
                    updatedItems = state.items.concat(action.item);

                    existingCartItemIndex = state.items.findIndex(item => {
                        return item.id === action.item.id;
                    });
                    existingCartItem = state.items[existingCartItemIndex];

                    if (existingCartItem) {
                        updatedItem = {
                            ...existingCartItem,
                            amount: existingCartItem.amount + action.item.amount,
                        };
                        updatedItems = [...state.items];
                        updatedItems[existingCartItemIndex] = updatedItem;
                    } else {
                        updatedItem = {
                            ...action.item,
                        }
                    }

                    updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
                    return {
                        items: updatedItems,
                        totalAmount: updatedTotalAmount
                    };
                case 'REMOVE':
                    existingCartItemIndex = state.items.findIndex(
                        (item) => item.id === action.id
                    );
                    existingCartItem = state.items[existingCartItemIndex];
                    updatedTotalAmount = state.totalAmount - existingCartItem.price;

                    if (existingCartItem.amount === 1) {
                        updatedItems = state.items.filter((item) => {
                            return item.id !== action.id
                        });
                    } else {
                        updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
                        updatedItems = [...state.items];
                        updatedItems[existingCartItemIndex] = updatedItem;
                    }

                    return {
                        items: updatedItems,
                        totalAmount: updatedTotalAmount,
                    }
                default:
                    return defaultCartState;
            }
        }, defaultCartState);

        const addItemToCart = (item) => {
            dispatchCartAction({
                type: 'ADD',
                item: item
            });
        };

        const removeItemFromCart = (id) => {
            dispatchCartAction({
                type: 'REMOVE',
                id: id
            });
        };

        const cartContext = {
            items: cartState.items,
            totalAmount: cartState.totalAmount,
            addItem: addItemToCart,
            removeItem: removeItemFromCart
        }
        return (
            <CartContext.Provider value={cartContext}>
                {props.children}
            </CartContext.Provider>
        );
    }
;
export default CartProvider;