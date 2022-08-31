import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm.js'


const MealItem = (props) => {

    const itemPrice = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{itemPrice}</div>
            </div>
            <div>
                <MealItemForm/>
            </div>
        </li>
    );
};

export default MealItem;