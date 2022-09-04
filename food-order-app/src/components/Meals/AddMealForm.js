import React, {useState, useEffect} from 'react';
import classes from './AddMealsForm.module.css';

const AddMealForm = (props) => {


    return (
        <React.Fragment>
            <form onSubmit={() => {
            }}>
                <div className={classes['form-input']}>
                    <div>
                        <label htmlFor='name'>name: </label>
                        <input
                            type='text'
                            id='name'
                            onChange={() => {
                            }}
                            onBlur={() => {
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor='description'>description: </label>
                        <input
                            type='text'
                            id='description'
                            onChange={() => {
                            }}
                            onBlur={() => {
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor='price'>price: </label>
                        <input
                            type='number'
                            id='price'
                            onChange={() => {
                            }}
                            onBlur={() => {
                            }}
                        />
                    </div>
                </div>
                <button type="submit" className={classes['submit-button']}>submit</button>
            </form>
        </React.Fragment>
    );
};

export default AddMealForm;