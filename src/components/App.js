import React from 'react';
import Button from './Button/Button';
import animBouncy from './animations/Bouncy/Bouncy';
import styled, {ThemeProvider} from 'styled-components';
import {LightTheme, DarkTheme} from './Theme';

const App = props => {
    return (
        <ThemeProvider theme={LightTheme}>
            <div>
                <Button text="I'm not your button" status='disabled'></Button>
                <ThemeProvider theme={DarkTheme}>
                    <Button text='new button'></Button>
                </ThemeProvider>
                <Button text="I'm a bouncy animation" animation={animBouncy}></Button>
            </div>
        </ThemeProvider>
    );
};

export default App;
