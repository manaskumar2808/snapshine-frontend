import styled from 'styled-components/macro';
import ReactCrop from 'react-image-crop';

export const Container = styled(ReactCrop)`
    .ReactCrop {
        border: 1px solid black;
    }

    .ReactCrop .ReactCrop__image {
        max-width: 100%;
        max-height: 100%;
    }

    .ReactCrop__crop-selection {
        border: ${({theme}) => `3px dashed ${theme.colors.blue}`};
    }

    .ReactCrop__drag-handle {
        display: none;
    }
`;
