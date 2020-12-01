import React from 'react';

const Button = ({text, link, size, type}) => {
    return (
        <a href={link} className={`btn ${type} ${size}`}>
            {text}
        </a>
    )
}

export default Button;