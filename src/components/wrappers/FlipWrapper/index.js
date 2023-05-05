import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { useCallback, useEffect } from 'react';
import { flipImage } from '@/store/actions/flip';
import { setImage } from '@/store/actions/image';
import { setActiveFeature } from '@/store/actions/feature';
import { PHOTO_ID } from '@/constants/Document';

const FlipWrapper = ({ children }) => {
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const flipX = useSelector(({ flp }) => flp.flipX);
    const flipY = useSelector(({ flp }) => flp.flipY);
    const active = useSelector(({ flp }) => flp.active);

    useEffect(() => { 
        if (active)
            onFlipComplete();
    }, [active, onFlipComplete]);

    const onFlipComplete = useCallback(() => {
        const canvas = document.createElement("canvas");
        const imageElement = document.getElementById(PHOTO_ID);

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        canvas.width = image.width * scaleX;
        canvas.height = image.height * scaleY;
        const ctx = canvas.getContext("2d");

        if (flipX) {
            ctx.scale(-1, 1);
        }

        if (flipY) {
            ctx.scale(1, -1);
        }

        const { width: canvasWidth, height: canvasHeight } = canvas;

        ctx.drawImage(
            imageElement,
            flipX ? canvasWidth * -1 : 0,
            flipY ? canvasHeight * -1 : 0,
            canvasWidth,
            canvasHeight
        );

        const src = canvas.toDataURL("image/jpeg");

        dispatch(setImage({...image, src}));
        dispatch(setActiveFeature(null));
        dispatch(flipImage(false));
    }, [flipX, flipY, image, dispatch]);

    return (
        <Container flipX={flipX} flipY={flipY}>
            {children}
        </Container>
    );
}

export default FlipWrapper;