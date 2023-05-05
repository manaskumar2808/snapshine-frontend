import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { setImage } from '@/store/actions/image';
import { setActiveFeature } from '@/store/actions/feature';
import { useCallback, useEffect } from 'react';
import { PHOTO_ID } from '@/constants/Document';
import { colorImage } from '@/store/actions/color';

const ColorWrapper = ({ children }) => {
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const temperature = useSelector(({ clr }) => clr.temperature);
    const tint = useSelector(({ clr }) => clr.tint);
    const active = useSelector(({ clr }) => clr.active);

    useEffect(() => { 
        if (active)
            onColorComplete();
    }, [active, onColorComplete]);

    const onColorComplete = useCallback(() => {
        const canvas = document.createElement("canvas");
        const imageElement = document.getElementById(PHOTO_ID);

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        canvas.width = image.width * scaleX;
        canvas.height = image.height * scaleY;
        const ctx = canvas.getContext("2d");

        ctx.filter = `
            hue-rotate(${temperature}deg)
            sepia(${tint}%)
        `;

        ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

        const src = canvas.toDataURL("image/jpeg");

        dispatch(setImage({...image, src }));
        dispatch(setActiveFeature(null));
        dispatch(colorImage(false));
    }, [temperature, tint, image, dispatch]);
    
    return (
        <Container
            temperature={temperature}
            tint={tint}
        >
            {children}
        </Container>
    );
}

export default ColorWrapper;