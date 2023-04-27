import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Text = styled.p`
    @font-face {
        font-family: 'Dancing Script';
        src: url('/fonts/Dancing_Script/DancingScript-VariableFont_wght.ttf');
    }

    margin: 0;
    font-family: 'Dancing Script';
    font-size: 30px;
    font-weight: 800;

    ::first-letter {
        color: ${({ theme }) => theme.colors.primary};
    }
`;