import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { useCallback, useEffect } from 'react';
import { flipImage } from '@/store/actions/flip';
import { setImage } from '@/store/actions/image';
import { setActiveFeature } from '@/store/actions/feature';

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
        const imageElement = document.createElement("img");

        imageElement.src = image.src;
        imageElement.height = image.height;
        imageElement.width = image.width;

        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");

        if (flipX) {
            ctx.scale(-1, 1);
        }

        if (flipY) {
            ctx.scale(1, -1);
        }

        ctx.drawImage(imageElement, flipX ? image.width * -1 : 0, flipY ? image.height * -1 : 0, image.width, image.height);

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