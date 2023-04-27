import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import styled from 'styled-components/macro';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

export const ResizeWrapper = styled(ResizableBox)``;

export const DragWrapper = styled(Draggable)``;

export const Display = styled.div`
    height: ${({ height }) => `${height}px`};
    width: ${({width}) => `${width}px`};
`;

export const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;
