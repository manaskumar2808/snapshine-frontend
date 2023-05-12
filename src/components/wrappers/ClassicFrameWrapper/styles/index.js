import styled from 'styled-components/macro';

export const Container = styled.div`
    & img {
        border: ${({ title, size, color }) => `${size}px ${title} ${color}`};
    }
`;