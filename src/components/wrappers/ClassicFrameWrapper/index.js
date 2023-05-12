import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { FrameTitle, Frames } from '@/data/frames';
import { frameImage } from '@/store/actions/frame';
import { useCallback, useEffect } from 'react';
import { setActiveFeature } from '@/store/actions/feature';
import { setImage } from '@/store/actions/image';
import { PHOTO_ID } from '@/constants/Document';
import { getUpdatedCTX } from '@/utilities/frame';
import { css, useTheme } from 'styled-components';
import { Photo } from '@/components/Manipulator/styles';
import { darkenColor, hexToRgb } from '@/utilities/color';

const ClassicFrameWrapper = ({ children }) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const frameId = useSelector(({ frm }) => frm.frameId);
    const { size: frameSize, color: frameColor } = useSelector(({ frm }) => frm.frameParams);
    const active = useSelector(({ frm }) => frm.active);

    const frame = Frames.find(frame => frame.id === frameId);

    useEffect(() => { 
        if (active)
            onComplete();
    }, [active, onComplete]);

    const onComplete = useCallback(() => {
        const canvas = document.createElement("canvas");
        const imageElement = document.getElementById(PHOTO_ID);
        const styles = window.getComputedStyle(imageElement);
        
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        
        const imageWidth = image.width * scaleX;
        const imageHeight = image.height * scaleY;

        const borderWidth = frameSize * scaleX;

        canvas.width = imageWidth + 2 * borderWidth;
        canvas.height = imageHeight  + 2 * borderWidth;

        const ctx = canvas.getContext('2d');

        const x = borderWidth;
        const y = borderWidth;

        
        ctx.fillStyle = theme.colors.white;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.shadowColor = theme.colors.white;
        ctx.strokeStyle = frameColor;
        ctx.lineWidth = borderWidth;

        const [r, g, b] = hexToRgb(frameColor);
        
        // draw the image at the calculated position and dimensions
        ctx.drawImage(imageElement, x, y, imageWidth, imageHeight);

        switch (frame.title) {
            case FrameTitle.SOLID:
                ctx.strokeRect(borderWidth/2, borderWidth/2, imageWidth + borderWidth, imageHeight + borderWidth);
                break;
            case FrameTitle.DASHED:
                ctx.setLineDash([borderWidth, borderWidth]);

                // Top line
                ctx.beginPath();
                ctx.moveTo(borderWidth / 2, borderWidth / 2);
                ctx.lineTo(imageWidth + 1.5 * borderWidth, borderWidth / 2);
                ctx.stroke();

                // Left line
                ctx.beginPath();
                ctx.moveTo(borderWidth / 2, borderWidth / 2);
                ctx.lineTo(borderWidth / 2, imageHeight + 1.5 * borderWidth);
                ctx.stroke();

                // Bottom line
                ctx.beginPath();
                ctx.moveTo(borderWidth / 2, imageHeight + 1.5 * borderWidth);
                ctx.lineTo(imageWidth + 1.5 * borderWidth, imageHeight + 1.5 * borderWidth);
                ctx.stroke();

                // Right line
                ctx.beginPath();
                ctx.moveTo(imageWidth + 1.5 * borderWidth, borderWidth / 2);
                ctx.lineTo(imageWidth + 1.5 * borderWidth, imageHeight + 1.5 * borderWidth);
                ctx.stroke();
                break;
            case FrameTitle.DOTTED:
                ctx.setLineDash([borderWidth / 4, borderWidth]);
                ctx.lineCap = 'round';
                ctx.strokeRect(borderWidth/2, borderWidth/2, imageWidth + borderWidth, imageHeight + borderWidth);
                break;
            case FrameTitle.DOUBLE:
                ctx.lineWidth = (borderWidth) / 3;
                ctx.strokeStyle = frameColor;
                ctx.strokeRect((borderWidth) / 6, (borderWidth) / 6, imageWidth + (10 / 6) * borderWidth, imageHeight + (10 / 6) * borderWidth);

                ctx.lineWidth = (borderWidth) / 3;
                ctx.strokeStyle = frameColor;
                ctx.strokeRect(borderWidth, borderWidth, imageWidth, imageHeight);
                break;
            case FrameTitle.RIDGE:
                // Top and left edges
                ctx.moveTo(borderWidth/2, borderWidth/2);
                ctx.lineTo(imageWidth + borderWidth/2, borderWidth/2);
                ctx.lineTo(imageWidth + borderWidth/2, imageHeight + borderWidth/2);

                // Bottom and right edges
                ctx.moveTo(imageWidth + borderWidth/2, imageHeight + borderWidth/2);
                ctx.lineTo(borderWidth/2, imageHeight + borderWidth/2);
                ctx.lineTo(borderWidth/2, borderWidth/2);

                // Draw a second set of edges slightly inset to create a ridge effect
                ctx.moveTo(1.5 * borderWidth, 1.5 * borderWidth);
                ctx.lineTo(imageWidth + 1.5 * borderWidth, 1.5 * borderWidth);
                ctx.lineTo(imageWidth + 1.5 * borderWidth, imageHeight + 1.5 * borderWidth);
                ctx.moveTo(imageWidth + 1.5 * borderWidth, imageHeight + 1.5 * borderWidth);
                ctx.lineTo(1.5 * borderWidth, imageHeight + 1.5 * borderWidth);
                ctx.lineTo(1.5 * borderWidth, 1.5 * borderWidth);

                ctx.stroke();
                ctx.closePath();
                break;
            case FrameTitle.INSET:
                const borderColor = frameColor;
                const insetColor = darkenColor(frameColor);
                
                ctx.lineCap = 'square';
                ctx.lineJoin = 'bevel';
                ctx.miterLimit = borderWidth;

                // Top line
                ctx.beginPath();
                ctx.moveTo(borderWidth / 2, borderWidth / 2);
                ctx.lineTo(imageWidth + 1.5 * borderWidth, borderWidth / 2);
                ctx.strokeStyle = borderColor;
                ctx.stroke();

                // Left line
                ctx.beginPath();
                ctx.moveTo(borderWidth / 2, borderWidth / 2);
                ctx.lineTo(borderWidth / 2, imageHeight + 1.5 * borderWidth);
                ctx.strokeStyle = borderColor;
                ctx.stroke();

                // Bottom line
                ctx.beginPath();
                ctx.moveTo(borderWidth / 2, imageHeight + 1.5 * borderWidth);
                ctx.lineTo(imageWidth + 1.5 * borderWidth, imageHeight + 1.5 * borderWidth);
                ctx.strokeStyle = insetColor;
                ctx.stroke();

                // Right line
                ctx.beginPath();
                ctx.moveTo(imageWidth + 1.5 * borderWidth, borderWidth / 2);
                ctx.lineTo(imageWidth + 1.5 * borderWidth, imageHeight + 1.5 * borderWidth);
                ctx.strokeStyle = insetColor;
                ctx.stroke();
                break;
            case FrameTitle.OUTSET:
                ctx.strokeRect(borderWidth/2, borderWidth/2, imageWidth + borderWidth, imageHeight + borderWidth);
                break;
            case FrameTitle.GROOVE:
                ctx.strokeRect((borderWidth) / 2, (borderWidth) / 2, imageWidth, imageHeight);
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
                ctx.strokeRect(borderWidth, borderWidth, imageWidth - (borderWidth) / 2, imageHeight - (borderWidth) / 2);
                break;
            default:
                break;
        }

        const src = canvas.toDataURL("image/jpeg");

        dispatch(
            setImage({
                ...image,
                src,
            })
        );
        dispatch(setActiveFeature(null));
        dispatch(frameImage(false));
    }, [dispatch, image, frameSize, frameColor, frame, theme]);

    return (
        <Container title={frame.title} size={frameSize} color={frameColor}>
            {children}
        </Container>
    );
}

export default ClassicFrameWrapper;