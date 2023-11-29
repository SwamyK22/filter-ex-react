import React, { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>

const Button = ({ type, onClick }: ButtonProps) => {
    return (
        <button type={type} onClick={onClick}>Click Here!</button>
    );
}

export default Button;
