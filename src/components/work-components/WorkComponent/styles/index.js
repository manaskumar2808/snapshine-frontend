import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    flex: 1;
`;