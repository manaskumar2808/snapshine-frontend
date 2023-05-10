import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 100%;
`;

export const Grid = styled.div`
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: ${({cols}) => `repeat(${cols}, 1fr)`};
    grid-template-rows: ${({rows}) => `repeat(${rows}, 78px)`};
    gap: 10px;
    margin-top: 10px;
`;

export const Layout = styled.div`
    cursor: pointer;
    position: relative;
    height: 80px;
    width: 80px;
    border-radius: 5px;
    border: ${({ theme, active }) => active ? `2.5px solid ${theme.colors.blue}` : `none`};
    background-color: ${({ theme }) => `${theme.colors.milk}`};
    overflow: hidden;

    :hover {
        background-color: ${({ theme }) => `${theme.colors.gray}`};
    }
`;

export const LayoutContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
`;

export const LayoutText = styled.p`
    font-size: 11px;
    color: ${({ theme }) => `${theme.colors.dark}`};
    margin: 0;
`;

export const LayoutDimensionSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: auto;
`;

export const LayoutDimension = styled.div`
    flex: 1;
`;

export const LayoutTitle = styled.p`
    font-size: 17px;
    color: ${({ theme }) => theme.colors.dark};
`;