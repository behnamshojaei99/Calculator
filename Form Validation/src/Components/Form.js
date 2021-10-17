import React, { useState, useRef } from 'react';
import { ERRORS } from '../constants';

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

    const userName = useRef();
    const password = useRef();
    const email = useRef();
    const confirmPassword = useRef();

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
            userName.current.style = 'border-color: red';
        }else {
            setError(prev => {
                return {
                    ...prev,
                    username: ""
                }
            });
            userName.current.style = 'border-color: green';
        }
        if(form.password.length < 7) {
            setError(prev => {
                return {
                    ...prev,
                    password: ERRORS.password.message
                }
            });
            password.current.style = 'border-color: red';
        }else {
            setError(prev => {
                return {
                    ...prev,
                    password: ''
                }
            });
            password.current.style = 'border-color: green';
        }
        if(!form.email.includes("@gmail")) {
            setError(prev => {
                return {
                    ...prev,
                    email: ERRORS.email.message
                }
            });
            email.current.style = 'border-color: red';
        }else {
            setError(prev => {
                return {
                    ...prev,
                    email: ""
                }
            });
            email.current.style = 'border-color: green';
        }
        if (form.password && form.password === form.confirmPassword) {
            setError(prev => {
                return {
                    ...prev,
                    confirmPassword: ""
                }
            });
            confirmPassword.current.style = 'border-color: green';
        }else {
            setError(prev => {
                return {
                    ...prev,
                    confirmPassword: ERRORS.confirmPassword.message
                }
            });
            confirmPassword.current.style = 'border-color: red';
        }
    }

    return (
        <div className='row justify-content-center align-items-center h-100'>
            <div className='col-md-6 background rounded'>
                <h1 className='fw-bold m-3 text-start'>Form</h1>
                <input ref={userName} onChange={changeInputHandler} className='form-control mt-3' type='text' name='username' placeholder='Username' />
                <p className="error">{error.username}</p>
                <input ref={email} onChange={changeInputHandler} className='form-control mt-3' type='email' name='email' placeholder='Email' />
                <p className="error">{error.email}</p>
                <input ref={password} onChange={changeInputHandler} className='form-control mt-3' type='password' name='password' placeholder='Password' />
                <p className="error">{error.password}</p>
                <input ref={confirmPassword} onChange={changeInputHandler} className='form-control mt-3' type='password' name='confirmPassword' placeholder='Confirm Password' />
                <p className="error">{error.confirmPassword}</p>
                <button onClick={validate} className='btn btn-success m-3'>Submit</button>
            </div>
        </div>
    )
}

export default Form;
