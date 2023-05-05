import styled from "styled-components/macro";

export const Container = styled.div`
    & img {
        filter: ${
            ({ brightness, contrast, saturation, sharpness, blur }) => `
            brightness(${brightness}%) 
            contrast(${contrast}%) 
            saturate(${saturation}%) 
            drop-shadow(${sharpness}px 0px 0px)
            blur(${blur}px)`
        };
    }
`;