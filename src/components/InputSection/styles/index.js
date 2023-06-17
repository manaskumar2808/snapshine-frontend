import styled from "styled-components/macro";

export const Container = styled.div`
    margin: 10px 0;
`;

export const InputTitle = styled.p`
    font-size: 17px;
    color: ${({ theme }) => theme.colors.foreground};
    margin: 0;
`;

export const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const InputContainer = styled.div`
    width: 100px;
`;

export const InputTitleContainer = styled.div`
    flex: 1;
`;

export const RangeContainer = styled.div`
    width: 95%;
    margin: auto;
`;