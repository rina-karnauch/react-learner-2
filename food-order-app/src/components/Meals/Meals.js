import React, {useEffect, useState} from 'react';
import MealsSummary from "./MealsSummary.js";
import AvailableMeals from "./AvailableMeals.js";
import MealItem from "./MealItem/MealItem";
import AddMealForm from "./AddMealForm";

const Meals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            setError(null);

            let response = await fetch('https://react-guide-http-rk-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
            if (!response.ok) {
                throw new Error("something went wrong during http request.");
            } else {
                let data = await response.json();
                const parsedMeals = [];
                for (const key in data) {
                    parsedMeals.push({
                        id: key,
                        name: data[key].name,
                        description: data[key].description,
                        price: data[key].price,
                    })
                }
                setMeals(parsedMeals.map((meal) => {
                    return (
                        <MealItem
                            id={meal.id}
                            key={meal.id}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price}/>
                    );
                }));
                setIsLoading(false);
            }
        }
        try {
            fetchMeals();
        } catch (e) {
            setError(e);
        }
    }, []);


    let content = <p>no available meals</p>;

    if (meals.length > 0) {
        content = meals;
    }
    if (error) {
        content = <p>{error}</p>
    }
    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <React.Fragment>
            <MealsSummary/>
            <AvailableMeals content={content}/>
        </React.Fragment>

    );
};
export default Meals;