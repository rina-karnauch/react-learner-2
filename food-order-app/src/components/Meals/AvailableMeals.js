import classes from './AvailableMeals.module.css';
import Card from '../UI/Card.js';
// import sendInitialMeals from "../../server/server";

const AvailableMeals = (props) => {


    // useEffect(() => {
    //     fetchMeals();
    // }, [fetchMeals]);

    // useEffect(() => {
    //     setIsLoading(true);
    //     setError(null);
    //
    //     fetch('https://react-guide-http-rk-default-rtdb.europe-west1.firebasedatabase.app/meals.json')
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error("something went wrong during http request.");
    //             }
    //             return response.json();
    //         }).then((data) => {
    //         const parsedMeals = [];
    //         for (const key in data) {
    //             parsedMeals.push({
    //                 id: key,
    //                 name: data[key].name,
    //                 description: data[key].description,
    //                 price: data[key].price,
    //             })
    //         }
    //         setMeals(parsedMeals);
    //         setIsLoading(false);
    //
    //         setMeals(meals.map((meal) => {
    //             return (
    //                 <MealItem
    //                     id={meal.id}
    //                     key={meal.id}
    //                     name={meal.name}
    //                     description={meal.description}
    //                     price={meal.price}/>
    //             );
    //         }));
    //     }).catch((error) => {
    //         setIsLoading(false);
    //         setError(error.message);
    //     });
    // })


    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {props.content}
                </ul>
            </Card>
        </section>

    );
};

export default AvailableMeals;