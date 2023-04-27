import styled from 'styled-components/macro';

export const Container = styled.div`
    z-index: 200;
    background-color: ${({ opacity }) => `rgba(0,0,0,${opacity})`};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;