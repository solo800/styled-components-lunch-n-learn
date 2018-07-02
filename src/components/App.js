import React from 'react';
import styled from 'styled-components';

const buttonColor = 'rgb(236, 72, 59)';

const ButtonCon = styled.div`
  display: flex;
  align-items: center;
  height: 2.5rem;
  z-index: 1;
  overflow: hidden;

  button {
    color: #FFFFFF;
    background-color: ${buttonColor};
    border-radius: 50%;
    padding: 1.5rem;
    font-size: 2rem;
  }
`;

const Container = props => {
    return (
        <ButtonCon>
            <button>I'm a button</button>
        </ButtonCon>
    );
};

export default Container;
