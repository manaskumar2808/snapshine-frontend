import styled from "styled-components/macro";

export const Container = styled.div`
    & img {
        filter: ${
            ({ invert }) => `
            invert(${invert}%)`
        };
    }
`;