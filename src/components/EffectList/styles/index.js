import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Grid = styled.div`
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: ${({cols}) => `repeat(${cols}, 1fr)`};
    grid-template-rows: ${({rows}) => `repeat(${rows})`};
    gap: 10px;
    margin-top: 20px;
`;