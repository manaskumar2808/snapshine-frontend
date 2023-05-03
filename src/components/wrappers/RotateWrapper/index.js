import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { useCallback, useEffect } from 'react';
import { rotateImage } from '@/store/actions/rotate';
import { setImage } from '@/store/actions/image';
import { setActiveFeature } from '@/store/actions/feature';

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
        const canvas = document.createElement("canvas");
        const imageElement = document.createElement("img");

        imageElement.src = image.src;
        imageElement.height = image.height;
        imageElement.width = image.width;

        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(imageElement, 0, 0, image.width, image.height);

        ctx.rotate(degree);
        
        const src = canvas.toDataURL("image/jpeg");

        const naturalHeight = canvas.height;
        const naturalWidth = canvas.width;
        const aspectRatio = naturalWidth / naturalHeight;

        dispatch(setImage({...image, src, naturalHeight, naturalWidth, aspectRatio}));
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