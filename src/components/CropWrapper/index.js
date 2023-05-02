import { useCallback, useEffect, useState } from 'react';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '@/store/actions/image';
import { cropImage, setCropParams } from '@/store/actions/crop';
import { DEFAULT_WIDTH } from '@/constants/Default';
import { setActiveFeature } from '@/store/actions/feature';
import { CropOptionMap } from '@/data/crop-options';

const CropWrapper = ({ children }) => { 
    const dispatch = useDispatch();
    const image = useSelector(({ img }) => img.image);
    const active = useSelector(({ crp }) => crp.active);
    const crop = useSelector(({ crp }) => crp.cropParams);
    const cropOption = useSelector(({ crp }) => crp.cropOption);

    useEffect(() => { 
        if (image) {
            dispatch(setCropParams({
                x: 0,
                y: 0,
                width: image.width,
                height: image.height,
                unit: 'px'
            }));
        }
    }, [dispatch, image]);

    useEffect(() => { 
        if (active)
            onCropComplete();
        dispatch(cropImage(false));
    }, [active, onCropComplete, dispatch]);
    
    const setCrop = useCallback((crop) => { 
        dispatch(setCropParams(crop));
    }, [dispatch]);

    const onCropComplete = useCallback(() => {
        const canvas = document.createElement('canvas');
        const imageElement = document.createElement("img");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const cropWidth = crop.width * scaleX;
        const cropHeight = crop.height * scaleY;
        const cropX = crop.x * scaleX;
        const cropY = crop.y * scaleY;
        canvas.width = cropWidth
        canvas.height = cropHeight;
        const ctx = canvas.getContext('2d');

        imageElement.src = image.src;
    
        const pixelRatio = window.devicePixelRatio;
        canvas.width = cropWidth * pixelRatio;
        canvas.height = cropHeight * pixelRatio;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';
    
        ctx.drawImage(
            imageElement,
            cropX,
            cropY,
            cropWidth,
            cropHeight,
            0,
            0,
            cropWidth,
            cropHeight,
        );

        const src = canvas.toDataURL("image/jpeg");
        const alt = image.alt;
        const naturalHeight = canvas.height;
        const naturalWidth = canvas.width;
        const aspectRatio = naturalWidth / naturalHeight;
        const height = DEFAULT_WIDTH / aspectRatio;
        const width = DEFAULT_WIDTH;

        dispatch(setImage({ src, alt, height, width, aspectRatio, naturalHeight, naturalWidth }));
        dispatch(setActiveFeature(null));
    }, [crop, image, dispatch]);

    return (
        <Container
            // ruleOfThirds
            crop={crop}
            onChange={c => setCrop(c)}
            keepSelection={cropOption && cropOption.id !== CropOptionMap.FreeForm.id}
        >
            {children}
        </Container>
    );
}

export default CropWrapper;