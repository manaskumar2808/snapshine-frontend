import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { useCallback, useEffect } from 'react';
import { rotateImage } from '@/store/actions/rotate';
import { setImage } from '@/store/actions/image';
import { setActiveFeature } from '@/store/actions/feature';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from '@/constants/Default';

const RotateWrapper = ({ children }) => {
    const dispatch = useDispatch();

    const degree = useSelector(({ rot }) => rot.degree);
    const image = useSelector(({ img }) => img.image);
    const active = useSelector(({ rot }) => rot.active);

    useEffect(() => { 
        if (active)
            onRotateComplete();
    }, [active, onRotateComplete]);

    // const onRotateComplete = useCallback(() => {
    //     const canvas = document.createElement("canvas");
    //     const imageElement = document.createElement("img");

    //     imageElement.src = image.src;
        
    //     let height = image.height;
    //     let width = image.width;
        
    //     let naturalHeight = image.naturalHeight;
    //     let naturalWidth = image.naturalWidth;

    //     if (degree % 180 !== 0) {
    //         console.log('Swapping');
    //         [height, width] = [width, height];
    //         [naturalHeight, naturalWidth] = [naturalWidth, naturalHeight];
    //     }
        
    //     // const aspectRatio = naturalWidth / naturalHeight;

    //     // if (height > width) {
    //     //     height = Math.min(height, DEFAULT_HEIGHT);
    //     //     width = aspectRatio * height;
    //     // } else {
    //     //     width = Math.min(width, DEFAULT_WIDTH);
    //     //     height = width / aspectRatio;
    //     // }

    //     // console.log('imageElement height', imageElement.height);
    //     // console.log('imageElement width', imageElement.width);

    //     const ctx = canvas.getContext("2d");

    //     canvas.width = width;
    //     canvas.height = height;

    //     console.log('canvas height 1', canvas.height);
    //     console.log('canvas width 1', canvas.width);

    //     ctx.translate(width / 2, height / 2);
    //     ctx.rotate((degree * Math.PI) / 180);
    //     ctx.drawImage(imageElement, -width/2, -height/2, width, height);

    //     const src = canvas.toDataURL("image/jpeg");

    //     // canvas.width = width;
    //     // canvas.height = height;

    //     console.log('canvas height 2', canvas.height);
    //     console.log('canvas width 2', canvas.width);

    //     const aspectRatio = naturalWidth / naturalHeight;

    //     dispatch(setImage({
    //         ...image,
    //         src,
    //         height,
    //         width,
    //         naturalHeight,
    //         naturalWidth,
    //         aspectRatio
    //     }));
    //     dispatch(setActiveFeature(null));
    //     dispatch(rotateImage(false));
    // }, [degree, image, dispatch]);

    const onRotateComplete = useCallback(() => {
        const canvas = document.createElement('canvas');
        const imageElement = document.createElement('img');
        imageElement.src = image.src;
        imageElement.alt = image.alt;

        const { PI, sin, cos, abs, min, max } = Math;

        const angle = (degree * PI) / 180;
        const sinAngle = sin(angle);
        const cosAngle = cos(angle);

        canvas.width = abs(image.width * cosAngle) + abs(image.height * sinAngle);
        canvas.height = abs(image.width * sinAngle) + abs(image.height * cosAngle);

        const ctx = canvas.getContext('2d');
        const { width: canvasWidth, height: canvasHeight } = canvas;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.rotate(angle);    

        ctx.drawImage(
            imageElement,
            -image.width / 2,
            -image.height / 2,
            image.width,
            image.height,
        );

        let naturalHeight = image.naturalHeight;
        let naturalWidth = image.naturalWidth;

        if (image.height != canvasHeight) {
            [naturalHeight, naturalWidth] = [naturalWidth, naturalHeight];
        }

        const aspectRatio = naturalWidth / naturalHeight;

        let height = canvasHeight;
        let width = canvasWidth;
        if (canvasHeight > canvasWidth) {
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