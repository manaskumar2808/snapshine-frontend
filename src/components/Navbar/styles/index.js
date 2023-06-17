import styled from 'styled-components/macro';
import Link from 'next/link';

export const Container = styled.div`
    background-color: #fff;
    width: 100%;
    height: 50px;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
`;

export const NavItem = styled.div`
    text-align: center;
    padding: 10px;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: ${({ active, theme }) => active ? theme.colors.blue : theme.colors.dark};
`;

export const NavText = styled.p`
    margin: 0;
`;