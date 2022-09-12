import React, {useEffect, useState} from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card.js';
import AddMealForm from "./AddMealForm";
import MealItem from "./MealItem/MealItem";


const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [reload, setReload] = useState(false);

    const handleDelete = (key) => {
        fetch(
            `https://react-guide-http-rk-default-rtdb.europe-west1.firebasedatabase.app/meals/${key}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'no-cors',
            })
            .then((r) => {
            }).catch((error) => {
            console.error('error deleting such key')
        });
    }

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
                        key: key,
                        id: data[key].id,
                        name: data[key].name,
                        description: data[key].description,
                        price: data[key].price
                    })
                }
                setMeals(parsedMeals.map((meal) => {
                    return (
                        <MealItem
                            key={meal.key}
                            id={meal.id}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price}
                            handleDelete={handleDelete}
                            deleteKey={meal.key}
                        />
                    );
                }));
                setIsLoading(false);

                if (reload) {
                    setReload(false);
                }
            }
        }
        try {
            fetchMeals().then(r => {
            });
        } catch (e) {
            setError(e);
        }
    }, [reload]);


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
        <section className={classes.meals}>
            <Card>
                <ul>
                    {content}
                </ul>
            </Card>
            <Card>
                <AddMealForm setReload={setReload}/>
            </Card>
        </section>

    );
};

export default AvailableMeals;