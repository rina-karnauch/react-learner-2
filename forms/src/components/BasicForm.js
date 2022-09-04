import React,{useState} from 'react';
import SimpleInput from './SimpleInput';

const BasicForm = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const onSubmitHandler = (event) => {

    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className='control-group'>
                <div className='form-control'>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name'/>
                </div>
            </div>
            <div className='form-control'>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name'/>
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
