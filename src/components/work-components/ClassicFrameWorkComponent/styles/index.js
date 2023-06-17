import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Grid = styled.div`
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: ${({cols}) => `repeat(${cols}, 1fr)`};
    grid-template-rows: ${({rows}) => `repeat(${rows}, 78px)`};
    gap: 10px;
    margin-top: 10px;
`;

export const Frame = styled.div`
    cursor: pointer;
    position: relative;
    height: 80px;
    width: 80px;
    border-radius: 5px;
    box-sizing: border-box;
    border: ${({ theme, title, frameColor }) => `5px ${title.toLowerCase()} ${frameColor}`};
    background-color: ${({ theme }) => `${theme.colors.activebg}`};
    color: ${({ theme }) => `${theme.colors.foreground}`};
    overflow: hidden;

    :hover {
        background-color: ${({ theme }) => `${theme.colors.gray}`};
    }
`;

export const FrameContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
`;

export const FrameText = styled.p`
    font-size: 11px;
    color: ${({ theme }) => `${theme.colors.foreground}`};
    margin: 0;
`;

export const FrameTitle = styled.p`
    font-size: 17px;
    color: ${({ theme }) => theme.colors.foreground};
`;