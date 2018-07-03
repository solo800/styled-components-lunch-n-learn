import {keyframes} from 'styled-components';

const Bouncy = keyframes`
    0%, 100% {
        transform: scale(1) translate(0px, 0px);
    }
    
    50% {
        transform: scale(1.1) translate(60px, 20px);
    }
`;

export default Bouncy;