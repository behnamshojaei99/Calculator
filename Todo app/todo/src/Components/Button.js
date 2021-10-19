import React from 'react';

const Button = ({clicked, children, classes}) => {
    return (
        <button className={classes} onClick={clicked}>{children}</button>
    );
}

export default Button;