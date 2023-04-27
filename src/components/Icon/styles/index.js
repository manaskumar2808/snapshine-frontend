import styled from 'styled-components/macro';

export const Container = styled.div`
    text-align: center;
    padding: 10px;
    cursor: pointer;
    background-color: ${({theme, active}) => active ? theme.colors.milk : '#fff'};

    :hover {
        background-color: ${({theme}) => theme.colors.milk};
    }
`;

export const Display = styled.div``;

export const Text = styled.p`
    font-size: 13px;
    color: ${({theme}) => theme.colors.dark};
`;