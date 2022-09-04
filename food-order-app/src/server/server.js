const INITIAL_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

// for (const key in INITIAL_MEALS) {
//     const meal = {
//         id: key,
//         name: INITIAL_MEALS[key].name,
//         description: INITIAL_MEALS[key].description,
//         price: INITIAL_MEALS[key].price,
//
//     };
//     fetch(
//         'https://react-guide-http-rk-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
//         {
//             method: 'POST',
//             body: JSON.stringify(meal),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         }
//     ).then((response) => {
//         console.log("done");
//     }).catch((error) => {
//         console.error(error);
//     });
//
// }
// export default sendInitialMeals;