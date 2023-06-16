import styled from 'styled-components/macro';

export const Container = styled.div`
    border: none;
    border-radius: 5px;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 300px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
`;

export const List = styled.div`
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
`;