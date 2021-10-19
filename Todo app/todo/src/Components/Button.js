import React from 'react';

const Button = ({clicked, children}) => {
    return (
        <button className='btn btn-primary' onClick={clicked}>{children}</button>
    );
}

export default Button;