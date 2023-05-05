import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { useCallback, useEffect } from 'react';
import { rotateImage } from '@/store/actions/rotate';
import { setImage } from '@/store/actions/image';
import { setActiveFeature } from '@/store/actions/feature';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from '@/constants/Default';
import { PHOTO_ID } from '@/constants/Document';

const RotateWrapper = ({ children }) => {
    const dispatch = useDispatch();

    const degree = useSelector(({ rot }) => rot.degree);
    const image = useSelector(({ img }) => img.image);
    const active = useSelector(({ rot }) => rot.active);

    useEffect(() => { 
        if (active)
            onRotateComplete();
    }, [active, onRotateComplete]);

    const onRotateComplete = useCallback(() => {
        const canvas = document.createElement('canvas');
        const imageElement = document.getElementById(PHOTO_ID);

        let scaleX = image.naturalWidth / image.width;
        let scaleY = image.naturalHeight / image.height;

        const { PI, sin, cos, abs, min } = Math;

        const angle = (degree * PI) / 180;
        const sinAngle = sin(angle);
        const cosAngle = cos(angle);

        const imageWidth = image.width * scaleX;
        const imageHeight = image.height * scaleY;

        canvas.width = (abs(imageWidth * cosAngle) + abs(imageHeight * sinAngle));
        canvas.height = (abs(imageWidth * sinAngle) + abs(imageHeight * cosAngle));

        const ctx = canvas.getContext('2d');
        const { width: canvasWidth, height: canvasHeight } = canvas;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.rotate(angle);    

        ctx.drawImage(
            imageElement,
            -imageWidth / 2,
            -imageHeight / 2,
            imageWidth,
            imageHeight,
        );

        let naturalHeight = image.naturalHeight;
        let naturalWidth = image.naturalWidth;

        if (degree % 180 !== 0) {
            [naturalHeight, naturalWidth] = [naturalWidth, naturalHeight];
        }

        const aspectRatio = naturalWidth / naturalHeight;

        let height = canvasHeight;
        let width = canvasWidth;
        if (canvasHeight >= canvasWidth) {
            height = min(height, DEFAULT_HEIGHT);
            width = aspectRatio * height;
        } else {
            width = min(width, DEFAULT_WIDTH);
            height = width / aspectRatio;
        }

        const src = canvas.toDataURL('image/jpeg');

        canvas.width = 0;
        canvas.height = 0;

        dispatch(setImage({
            ...image,
            src,
            height,
            width,
            naturalHeight,
            naturalWidth,
            aspectRatio
        }));
        dispatch(setActiveFeature(null));
        dispatch(rotateImage(false));
    }, [degree, image, dispatch]);


    return (
        <Container degree={degree}>
            {children}
        </Container>
    );
}

export default RotateWrapper;