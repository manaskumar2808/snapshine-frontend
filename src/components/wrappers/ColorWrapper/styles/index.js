import styled from "styled-components/macro";

export const Container = styled.div`
    & img {
        filter: ${
            ({ temperature, tint }) => `
            hue-rotate(${temperature}deg)
            sepia(${tint}%)`
        };
    }
`;