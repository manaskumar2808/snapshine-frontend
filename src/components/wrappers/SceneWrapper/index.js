import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { useCallback, useEffect, useState } from 'react';
import { PHOTO_ID } from '@/constants/Document';
import { Effects } from '@/data/effects';
import { EffectPropertiesList } from '@/data/effect-properties';
import { sceneImage } from '@/store/actions/scene';
import { DEFAULT_PROPERTIES } from '@/constants/Default';
import { setImage } from '@/store/actions/image';
import { setActiveFeature } from '@/store/actions/feature';

const SceneWrapper = ({ children }) => { 
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const sceneEffectId = useSelector(({ scn }) => scn.sceneEffectId);
    const active = useSelector(({ scn }) => scn.active);

    const [properties, setProperties] = useState(DEFAULT_PROPERTIES);

    useEffect(() => { 
        if (active)
            onSceneComplete();
    }, [active, onSceneComplete]);

    useEffect(() => { 
        console.log('sceneEffectId', sceneEffectId);
        const effect = Effects.find(e => e.id === sceneEffectId);
        const effectPropertiesId = effect ? effect.effectPropertiesId : null;
        console.log('effectPropertiesId', effectPropertiesId);
        const effectProperties = EffectPropertiesList.find(ep => ep.id === effectPropertiesId);
        setProperties(effectProperties || DEFAULT_PROPERTIES);
    }, [sceneEffectId]);
    
    const onSceneComplete = useCallback(() => {
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
            drop-shadow(${properties.sharpness}px 0px 0px)
            blur(${properties.blur}px)
            sepia(${properties.tint}%)
            hue-rotate(${properties.temperature}deg)
            opacity(${properties.opacity}%)
        `;

        ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

        const src = canvas.toDataURL("image/jpeg");

        dispatch(setImage({...image, src }));
        dispatch(setActiveFeature(null));
        dispatch(sceneImage(false));
    }, [properties, image, dispatch]);

    return (
        <Container properties={properties}>
            {children}
        </Container>
    );
}

export default SceneWrapper;