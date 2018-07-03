import styled from 'styled-components';

const buttonColor = 'rgb(236, 72, 59)';

const ButtonCon = styled.div`
  display: flex;
  align-items: center;
  height: 2.5rem;
  z-index: 1;
  overflow: hidden;
  animation: ${props => props.animation ? `${props.animation} 2s infinite ease-in-out` : ''};

  button {
    color: #FFFFFF;
    background-color: ${buttonColor};
    border-radius: 50%;
    padding: 1.5rem;
    font-size: 2rem;
    background-color: ${props => 'disabled' === props.status ? 'grey' : 'blue'};
  }
`;

export default ButtonCon;