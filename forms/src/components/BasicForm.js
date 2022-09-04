import React, {useState, useEffect, useCallback} from 'react';
import SimpleInput from "./SimpleInput";

const BasicForm = (props) => {
    const invalidMessage = "given input is invalid";

    const [firstNameIsValid, setFirstNameIsValid] = useState(false);
    const [lastNameIsValid, setLastNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}>
            <div className="form-control">
                <SimpleInput label="first name"
                             invalidMessage={invalidMessage}
                             validationFunction={(input) => {
                                 return input.trim() !== '';
                             }}
                             setIsValid={setFirstNameIsValid}
                />
                <SimpleInput label="last name"
                             invalidMessage={invalidMessage}
                             validationFunction={(input) => {
                                 return input.trim() !== '';
                             }}
                             setIsValid={setLastNameIsValid}
                />
                <SimpleInput label="email"
                             invalidMessage="invalid email was given"
                             validationFunction={(input) => {
                                 return String(input)
                                     .toLowerCase()
                                     .match(
                                         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                     );
                             }}
                             setIsValid={setEmailIsValid}
                />
            </div>
            <div className='form-actions'>
                <button disabled={!firstNameIsValid || !lastNameIsValid || !emailIsValid}>Submit</button>
            </div>
        </form>);
};

export default BasicForm;
