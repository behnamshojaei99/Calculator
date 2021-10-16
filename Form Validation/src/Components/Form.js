import React, { useState } from 'react';
import { ERRORS } from '../errors';

const Form = (props) => {

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [border, setBorder] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const changeInputHandler = (e) => {
        setForm(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        });
    }

    const validate = () => {
        if(form.username.length < 7) {
            setError(prev => {
                return {
                    ...prev,
                    username: ERRORS.username.message
                }
            });
            setBorder(prev => {
                return {
                    ...prev,
                    username: 'red'
                }
            });
        }else {
            setError(prev => {
                return {
                    ...prev,
                    username: ""
                }
            });
            setBorder(prev => {
                return {
                    ...prev,
                    username: 'green'
                }
            });
        }
        if(form.password.length < 7) {
            setError(prev => {
                return {
                    ...prev,
                    password: ERRORS.password.message
                }
            });
            setBorder(prev => {
                return {
                    ...prev,
                    password: 'red'
                }
            });
        }else {
            setError(prev => {
                return {
                    ...prev,
                    password: ''
                }
            });
            setBorder(prev => {
                return {
                    ...prev,
                    password: "green"
                }
            });
        }
        if(!form.email.includes("@gmail")) {
            setError(prev => {
                return {
                    ...prev,
                    email: ERRORS.email.message
                }
            });
            setBorder(prev => {
                return {
                    ...prev,
                    email: 'red'
                }
            });
        }else {
            setError(prev => {
                return {
                    ...prev,
                    email: ""
                }
            });
            setBorder(prev => {
                return {
                    ...prev,
                    password: 'green'
                }
            });
        }
        if (form.password && form.password === form.confirmPassword) {
            setError(prev => {
                return {
                    ...prev,
                    confirmPassword: ""
                }
            });
            setBorder(prev => {
                return {
                    ...prev,
                    confirmPassword: 'green'
                }
            });
        }else {
            setError(prev => {
                return {
                    ...prev,
                    confirmPassword: ERRORS.confirmPassword.message
                }
            });
            setBorder(prev => {
                return {
                    ...prev,
                    confirmPassword: 'red'
                }
            });
        }
    }

    return (
        <div className='row justify-content-center align-items-center h-100'>
            <div className='col-md-6 background rounded'>
                <h1 className='fw-bold m-3 text-start'>Form</h1>
                <input onChange={changeInputHandler} className='form-control mt-3' style={{borderColor: border.username}} type='text' name='username' placeholder='Username' />
                <p className="error">{error.username}</p>
                <input onChange={changeInputHandler} className='form-control mt-3' style={{borderColor: border.email}}  type='email' name='email' placeholder='Email' />
                <p className="error">{error.email}</p>
                <input onChange={changeInputHandler} className='form-control mt-3' style={{borderColor: border.password}} type='password' name='password' placeholder='Password' />
                <p className="error">{error.password}</p>
                <input onChange={changeInputHandler} className='form-control mt-3' style={{borderColor: border.confirmPassword}} type='password' name='confirmPassword' placeholder='Confirm Password' />
                <p className="error">{error.confirmPassword}</p>
                <button onClick={validate} className='btn btn-success m-3'>Submit</button>
            </div>
        </div>
    )
}

export default Form;
