import Image from 'next/image';
import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

export const Photo = styled(Image)`
    height: ${({ fit }) => fit == 'cover' ? '100%' : 'auto'};
    width: 100%;
    /* object-fit: ${({ fit }) => fit}; */
`;