import React from 'react';

const Input = ({ type, placeholder, changed, value }) => {
    return (
        <input className='form-control' type={type} placeholder={placeholder} onChange={changed} value={value} />
    )
}

export default Input;