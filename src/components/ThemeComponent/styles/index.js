import Image from 'next/image';
import styled from 'styled-components/macro';

export const Container = styled.div`
    position: relative;
    height: ${({ size }) => `${size}px`};
    width: ${({ size }) => `${size}px`};
    border-radius: 5px;
    overflow: hidden;
    border: none;
`;

export const Theme = styled(Image)`
    object-fit: cover;
`;