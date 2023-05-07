import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { useCallback, useEffect, useState } from 'react';
import { PHOTO_ID } from '@/constants/Document';
import { Effects } from '@/data/effects';
import { EffectPropertiesList } from '@/data/effect-properties';
import { DEFAULT_PROPERTIES } from '@/constants/Default';
import { setImage } from '@/store/actions/image';
import { setActiveFeature } from '@/store/actions/feature';
import { effectImage } from '@/store/actions/effect';

const EffectWrapper = ({ children }) => { 
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const effectId = useSelector(({ eft }) => eft.effectId);
    const active = useSelector(({ eft }) => eft.active);

    const [properties, setProperties] = useState(DEFAULT_PROPERTIES);

    useEffect(() => { 
        if (active)
            onComplete();
    }, [active, onComplete]);

    useEffect(() => { 
        const effect = Effects.find(e => e.id === effectId);
        const effectPropertiesId = effect ? effect.effectPropertiesId : null;
        const effectProperties = EffectPropertiesList.find(ep => ep.id === effectPropertiesId);
        setProperties(effectProperties || DEFAULT_PROPERTIES);
    }, [effectId]);
    
    const onComplete = useCallback(() => {
        const canvas = document.createElement("canvas");
        const imageElement = document.getElementById(PHOTO_ID);

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        canvas.width = image.width * scaleX;
        canvas.height = image.height * scaleY;
        const ctx = canvas.getContext("2d");

        ctx.filter = `
            brightness(${properties.brightness}%)
            contrast(${properties.contrast}%)
            saturate(${properties.saturation}%)
            drop-shadow(${properties.sharpness}px ${properties.sharpnessY}px ${properties.blurRadius}px ${properties.shadowColor})
            blur(${properties.blur}px)
            sepia(${properties.tint}%)
            hue-rotate(${properties.temperature}deg)
            opacity(${properties.opacity}%)
            grayscale(${properties.grayscale}%)
        `;

        ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

        const src = canvas.toDataURL("image/jpeg");

        dispatch(setImage({...image, src }));
        dispatch(setActiveFeature(null));
        dispatch(effectImage(false));
    }, [properties, image, dispatch]);

    return (
        <Container properties={properties}>
            {children}
        </Container>
    );
}

export default EffectWrapper;