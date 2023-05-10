import styled from 'styled-components/macro';

export const Container = styled.div``;

export const ColorGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${({cols}) => `repeat(${cols}, 1fr)`};
    grid-template-rows: ${({rows}) => `repeat(${rows})`};
    gap: 10px;
    margin-top: 20px;
`;

export const ColorItem = styled.div`
    cursor: pointer;
    border: ${({ theme, active }) => active ? `2px solid ${theme.colors.dark}` : `0.1px solid ${theme.colors.dark}`};
    border-radius: 5px;
    height: 50px;
    width: 50px;
    overflow: hidden;
    background-color: ${({ color }) => `${color}`};
`;