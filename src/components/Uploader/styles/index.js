import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 500px;
    height: 350px;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border: ${({theme}) => `2.5px dashed ${theme.colors.gray}`};
    border-radius: 5px;
    padding: 20px;
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

export const UploadContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
`;

export const UploadText = styled.p`
    color: ${({ theme }) => `${theme.colors.dark}`};
    font-weight: 500;
    font-size: 18px;
`;

