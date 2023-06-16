import styled from 'styled-components/macro';

export const Container = styled.div`
    text-align: center;
    padding: 10px;
    cursor: pointer;
    background-color: ${({theme, active}) => active ? theme.colors.activebg : theme.colors.background};

    :hover {
        background-color: ${({theme}) => theme.colors.activebg};
    }
`;

export const Display = styled.div``;

export const Text = styled.p`
    font-size: 13px;
    color: ${({ theme }) => theme.colors.foreground};
    margin: 0;
`;