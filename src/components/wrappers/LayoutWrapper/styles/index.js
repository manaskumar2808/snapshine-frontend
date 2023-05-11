import styled from 'styled-components/macro';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: ${({ height }) => `${height}px`};
    width: ${({ width }) => `${width}px`};
    background-color: ${({ color }) => color};
    padding: 0;
`;

export const ChildWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    margin: auto;
`;

export const Child = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: ${({ height }) => `${height}px`};
    width: ${({ width }) => `${width}px`};
    padding: 0;
`;