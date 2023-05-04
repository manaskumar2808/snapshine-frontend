import styled from "styled-components/macro";

export const Container = styled.div`
    filter: ${
        ({ brightness, contrast, saturation, blur }) => `
        brightness(${brightness}%) 
        contrast(${contrast}%) 
        saturate(${saturation}%) 
        blur(${blur}px)`
    };
`;