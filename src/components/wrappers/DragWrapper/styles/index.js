import styled from 'styled-components/macro';

export const Container = styled.div`
    position: relative;
`;

export const DragHandler = styled.div`
    position: absolute;
    top: -30px;
    right: -30px;
    border-radius: 100%;
    background-color: #fff;
    height: 28px;
    width: 28px;
    box-sizing: border-box;
    border: ${({theme, disabled}) => disabled ? `0.5px solid ${theme.colors.blue}` : `0.5px solid ${theme.colors.dark}`};
`;

export const DragContent = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

export const DragIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;