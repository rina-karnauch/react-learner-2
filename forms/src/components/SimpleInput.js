import {useState, useEffect} from 'react';

const SimpleInput = (props) => {
    const [enteredInput, setEnteredInput] = useState('');
    const [isTouched, setTouched] = useState(false);
    const [isValid, setValid] = useState(false);

    useEffect(() => {
        props.setIsValid(isTouched && isValid);
    }, [isTouched, isValid]);

    const inputChangeHandler = (event) => {
        setEnteredInput(event.target.value);
        setValid(props.validationFunction(event.target.value));
    };

    const inputBlurHandler = (event) => {
        setTouched(true);
    };

    // const formSubmissionHandler = (event) => {
    //     event.preventDefault();
    //
    //     setEnteredInputTouched(true);
    //
    //     if (!enteredInputIsValid) {
    //         return;
    //     }
    //
    //     console.log(enteredInput);
    //
    //     // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    //     setEnteredInput('');
    //     setEnteredInputTouched(false);
    // };

    const nameInputClasses = (isTouched && !isValid)
        ? 'form-control invalid'
        : 'form-control';

    return (
        // <form onSubmit={formSubmissionHandler}>
        //     <div className={nameInputClasses}>
        //         <label htmlFor='name'>{props.label}</label>
        //         <input
        //             type='text'
        //             id='name'
        //             onChange={inputChangeHandler}
        //             onBlur={inputBlurHandler}
        //             value={enteredInput}
        //         />
        //         {currentInputIsInvalid && (
        //             <p className='error-text'>{props.invalidMessage}</p>
        //         )}
        //     </div>
        //     <div className='form-actions'>
        //         <button disabled={!formIsValid}>Submit</button>
        //     </div>
        // </form>
        <div className={nameInputClasses}>
            <label htmlFor='name'>{props.label}</label>
            <input
                type='text'
                id='name'
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                value={enteredInput}
            />
            {(isTouched && !isValid) && (
                <p className='error-text'>{props.invalidMessage}</p>
            )}
        </div>
    );
};

export default SimpleInput;