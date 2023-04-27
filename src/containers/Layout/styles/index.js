import styled from "styled-components/macro";

export const Container = styled.div`
    background-color: #ededed;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 5px;
`;