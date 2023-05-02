import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
`;

export const Grid = styled.div`
    /* height: 400px; */
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 78px);
    gap: 10px;
    margin-top: 10px;
`;

export const CropOption = styled.div`
    cursor: pointer;
    position: relative;
    border-radius: 5px;
    border: ${({ theme, active }) => active ? `2.5px solid ${theme.colors.blue}` : `none`};
    background-color: ${({ theme }) => `${theme.colors.milk}`};
    overflow: hidden;

    :hover {
        background-color: ${({ theme }) => `${theme.colors.gray}`};
    }
`;

export const CropContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
`;

export const CropText = styled.p`
    font-size: 11px;
    color: ${({ theme }) => `${theme.colors.dark}`};
    margin: 0;
`;

export const CropDimensionSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

export const CropDimension = styled.div`
    flex: 1;
`;