import React, {useState, useEffect} from 'react';
import classes from './AddMealsForm.module.css';

const AddMealForm = (props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0.00);

    const [errorObject, setErrorObject] = useState({
        name: false,
        description: false,
        price: false
    })

    const handleNameInput = (event) => {
        setName(event.target.value);
    }

    const handleDescriptionInput = (event) => {
        setDescription(event.target.value);
    }

    const handlePriceInput = (event) => {
        setPrice(parseFloat(event.target.value));
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        let nameFlag = false;
        let descFlag = false;
        let priceFlag = false;

        if (name.trim() === '') {
            nameFlag = true;
        }
        if (description.trim() === '') {
            descFlag = true;
        }
        if (!price) {
            priceFlag = true;
        }

        setErrorObject({
            name: nameFlag,
            description: descFlag,
            price: priceFlag
        });

        if (!nameFlag && !priceFlag && !descFlag) {
            let meal = {
                id: Date.now(),
                name: name,
                description: description,
                price: price
            }
            fetch("https://react-guide-http-rk-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
                {
                    method: 'POST',
                    body: JSON.stringify(meal),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'no-cors',
                }).then(() => {
                setErrorObject({
                    name: false,
                    description: false,
                    price: false
                });
            }).catch((error) => {
                console.error(error);
            })
        }

        props.setReload(true);
        event.target.reset();
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div className={classes['form-input'] && classes['container']}>
                    <label className={classes['form-label']} htmlFor='name'>
                        <input
                            className={errorObject.name ? classes['input-error'] : ''}
                            type='text'
                            id='name'
                            placeholder='text'
                            onChange={handleNameInput}
                        />
                    </label>
                    <label className={classes['form-label']} htmlFor='description'>
                        <input
                            className={errorObject.description ? classes['input-error'] : ''}
                            type='text'
                            id='description'
                            placeholder='description'
                            onChange={handleDescriptionInput}
                        />
                    </label>
                    <label className={classes['form-label']} htmlFor='price'>
                        <input
                            className={errorObject.price ? classes['input-error'] : ''}
                            type='number'
                            step="0.01"
                            id='price'
                            placeholder='price'
                            onChange={handlePriceInput}
                        />
                    </label>
                </div>
                <button type="submit" className={classes['submit-button']}>submit</button>
            </form>
        </React.Fragment>
    );
};

export default AddMealForm;