import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { basicAdjustImage } from '@/store/actions/basic-adjust';
import { setImage } from '@/store/actions/image';
import { setActiveFeature } from '@/store/actions/feature';
import { useCallback, useEffect } from 'react';

const BasicAdjustWrapper = ({ children }) => {
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const brightness = useSelector(({ bad }) => bad.brightness);
    const contrast = useSelector(({ bad }) => bad.contrast);
    const saturation = useSelector(({ bad }) => bad.saturation);
    const sharpness = useSelector(({ bad }) => bad.sharpness);
    const blur = useSelector(({ bad }) => bad.blur);
    const active = useSelector(({ bad }) => bad.active);

    useEffect(() => { 
        if (active)
            onBasicAdjustComplete();
    }, [active, onBasicAdjustComplete]);

    const onBasicAdjustComplete = useCallback(() => {
        const canvas = document.createElement("canvas");
        const imageElement = document.createElement("img");

        imageElement.src = image.src;

        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");

        ctx.filter = `
            brightness(${brightness}%) 
            contrast(${contrast}%) 
            saturate(${saturation}%) 
            blur(${blur}px)
        `;

        canvas.style.border = "0"; // remove any border: ;
        canvas.style.display = "block"; // remove any default padding

        ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

        const src = canvas.toDataURL("image/jpeg");

        dispatch(setImage({...image, src }));
        dispatch(setActiveFeature(null));
        dispatch(basicAdjustImage(false));
    }, [brightness, contrast, saturation, blur, image, dispatch]);
    
    return (
        <Container
            brightness={brightness}
            contrast={contrast}
            saturation={saturation}
            sharpness={sharpness}
            blur={blur}
        >
            {children}
        </Container>
    );
}

export default BasicAdjustWrapper;