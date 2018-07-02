import React from 'react';
import ButtonCon from './styles';

const Button = props => {
    return (
        <ButtonCon {...props}>
            <button>{props.text}</button>
        </ButtonCon>
    );
};

export default Button;