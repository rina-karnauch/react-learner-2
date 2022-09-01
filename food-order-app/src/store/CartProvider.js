import {useReducer} from 'react';
import CartContext from "./cartContext";

const CartProvider = (props) => {

        const defaultCartState = {
            items: [],
            totalAmount: 0,
        }

        const [cartState, dispatchCartAction] = useReducer((state, action) => {
            switch (action.type) {
                case 'ADD':
                    const updatedItems = state.items.concat(action.item);
                    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
                    return {
                        items: updatedItems,
                        totalAmount: updatedTotalAmount
                    };
                case 'REMOVE':
                    console.log("remove");
                    break;
                default:
                    console.log("unknown action");
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