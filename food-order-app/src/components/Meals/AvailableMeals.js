import classes from './AvailableMeals.module.css';
import Card from '../UI/Card.js';
import AddMealForm from "./AddMealForm";
import React from "react";

const AvailableMeals = (props) => {

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {props.content}
                </ul>
            </Card>
            <Card>
                <AddMealForm/>
            </Card>
        </section>

    );
};

export default AvailableMeals;