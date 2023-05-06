import Image from 'next/image';
import styled from 'styled-components/macro';

export const Container = styled.div`
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
`;

export const Display = styled.div`
    overflow: hidden;
    border-radius: 5px;
    border: ${({ active, theme }) => active ? `0.5px solid ${theme.colors.blue}` : 'none'};
    height: 80px;
    width: 100%;
`;

export const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: ${({ properties }) => `
        brightness(${properties.brightness}%)
        contrast(${properties.contrast}%)
        saturate(${properties.saturation}%)
        drop-shadow(${properties.sharpness}px 0px 0px)
        blur(${properties.blur}px)
        sepia(${properties.tint}%)
        hue-rotate(${properties.temperature}deg)
        opacity(${properties.opacity}%)
    `};
`;

export const TitleContainer = styled.div``;

export const Title = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.dark};
    margin: 0;
`;