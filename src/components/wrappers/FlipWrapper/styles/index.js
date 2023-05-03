import styled from "styled-components/macro";

export const Container = styled.div`
    transform: ${({ flipX, flipY }) => `scale(${flipX ? -1 : 1},${flipY ? -1 : 1})`};
`;