import styled from "styled-components/macro";

export const Container = styled.div`
    & img {
        filter: ${({ properties }) => `
            brightness(${properties.brightness}%)
            contrast(${properties.contrast}%)
            saturate(${properties.saturation}%)
            drop-shadow(${properties.sharpness}px ${properties.sharpnessY}px ${properties.blurRadius}px ${properties.shadowColor})
            blur(${properties.blur}px)
            sepia(${properties.tint}%)
            hue-rotate(${properties.temperature}deg)
            opacity(${properties.opacity}%)
            grayscale(${properties.grayscale}%)
        `};
    }
`;