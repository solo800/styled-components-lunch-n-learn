import React from 'react';
import Button from './Button/Button';
import animBouncy from './animations/Bouncy/Bouncy';

const App = props => {
    return (
        <div>
            <Button text="I'm not your button" status='disabled'></Button>
            <Button text='new button'></Button>
            <Button text="I'm a bouncy animation" animation={animBouncy}></Button>
        </div>
    );
};

export default App;
