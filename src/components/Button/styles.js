import styled, {keyframes} from 'styled-components';

const buttonColor = 'rgb(236, 72, 59)';

const buttonBouncy = keyframes`
    0%, 100% {
        transform: scale(1) translate(0px, 0px);
    }
    
    50% {
        transform: scale(1.1) translate(100px, 5px);
    }
`;

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
    animation: ${props => props.animation ? `${buttonBouncy} 2s 0.25s infinite ease-in-out` : ''};
  }
`;

export default ButtonCon;