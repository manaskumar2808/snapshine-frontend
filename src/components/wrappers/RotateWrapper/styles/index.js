import styled from 'styled-components/macro';

export const Container = styled.div`
    transform: ${({ degree }) => `rotate(${degree}deg)`};
`;