import React from 'react';
import Button from './Button/Button';

const App = props => {
    return (
        <div>
            <Button text="I'm not your button" status='disabled'></Button>
            <Button text='new button'></Button>
        </div>
    );
};

export default App;
