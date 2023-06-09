import { useCallback, useEffect, useState } from 'react';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '@/store/actions/image';
import { cropImage, setCropParams } from '@/store/actions/crop';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from '@/constants/Default';
import { setActiveFeature } from '@/store/actions/feature';
import { lockAspectRatio } from '@/utilities/crop';
import { CropOptions } from '@/data/crop-options';
import { PHOTO_ID } from '@/constants/Document';

const CropWrapper = ({ children }) => { 
    const dispatch = useDispatch();
    const image = useSelector(({ img }) => img.image);
    const active = useSelector(({ crp }) => crp.active);
    const crop = useSelector(({ crp }) => crp.cropParams);
    const cropOptionId = useSelector(({ crp }) => crp.cropOptionId);

    useEffect(() => { 
        if (image) {
            dispatch(setCropParams({
                x: 0,
                y: 0,
                height: image.height,
                width: image.width,
                unit: 'px',
                aspect: image.width / image.height,
            }));
        }
    }, [dispatch, image]);

    useEffect(() => { 
        if (active)
            onCropComplete();
    }, [active, onCropComplete]);
    
    const setCrop = (c) => { 
        const cropOption = CropOptions.find(co => co.id === cropOptionId);
        dispatch(setCropParams(lockAspectRatio(c, crop, image, cropOption)));
    }

    const onCropComplete = useCallback(() => {
        const canvas = document.createElement('canvas');
        const imageElement = document.getElementById(PHOTO_ID);

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const cropWidth = crop.width * scaleX;
        const cropHeight = crop.height * scaleY;
        const cropX = crop.x * scaleX;
        const cropY = crop.y * scaleY;
        canvas.width = cropWidth
        canvas.height = cropHeight;
        const ctx = canvas.getContext('2d');
    
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
        const aspectRatio = canvas.width / canvas.height;
        
        let height, width;
        if (canvas.width > canvas.height) {
            height = DEFAULT_WIDTH / aspectRatio;
            width = DEFAULT_WIDTH;
        } else {
            height = DEFAULT_HEIGHT;
            width = aspectRatio * DEFAULT_HEIGHT;
        }
        
        let naturalHeight = image.naturalHeight;
        let naturalWidth = image.naturalWidth;
        let naturalAspectRatio = naturalWidth / naturalHeight;
        
        if (aspectRatio > naturalAspectRatio) {
            naturalHeight = naturalWidth / aspectRatio;
        } else {
            naturalWidth = aspectRatio * naturalHeight;
        }

        dispatch(setImage({ ...image, src, alt, height, width, aspectRatio, naturalHeight, naturalWidth }));
        dispatch(setActiveFeature(null));
        dispatch(cropImage(false));
    }, [crop, image, dispatch]);

    return (
        <Container
            // ruleOfThirds
            crop={crop}
            onChange={c => setCrop(c)}
            // maxHeight={image ? image.height : 0}
            // minWidth={image ? image.width : 0}
            // keepSelection={cropOption && cropOption.id !== CropOptionMap.FreeForm.id}
            // circularCrop={cropOption && cropOption.id === CropOptionMap.Circle.id}
        >
            {children}
        </Container>
    );
}

export default CropWrapper;