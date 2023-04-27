import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Row = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.milk};
    padding: 5px 10px;
    height: 60px;
    border-radius: 5px;
`;

export const Section = styled.div``;

export const Title = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.dark};
    margin: 0;
`;