import { useDispatch, useSelector } from 'react-redux';
import { ChildWrapper, Container, Child } from './styles';
import { useCallback, useEffect, useState } from 'react';
import { PHOTO_ID } from '@/constants/Document';
import { setImage } from '@/store/actions/image';
import { layoutImage, setLayoutDimension } from '@/store/actions/layout';
import { setActiveFeature } from '@/store/actions/feature';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from '@/constants/Default';

const LayoutWrapper = ({ children }) => {
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const active = useSelector(({ lyt }) => lyt.active);
    const { height: layoutHeight, width: layoutWidth, color: layoutColor, border: layoutBorder } = useSelector(({ lyt }) => lyt.layoutParams);

    const [imageHeight, setImageHeight] = useState(image ? image.height : 0);
    const [imageWidth, setImageWidth] = useState(image ? image.width : 0);
    const [actualLayoutHeight, setActualLayoutHeight] = useState(0);
    const [actualLayoutWidth, setActualLayoutWidth] = useState(0);

    const { min } = Math;

    useEffect(() => { 
        if (active)
            onComplete();
    }, [active, onComplete]);

    useEffect(() => { 
        const layoutAspect = layoutWidth / layoutHeight;
        let height, width;

        if (layoutAspect > 1) {
            width = layoutWidth + 2 * layoutBorder;
            height = width / layoutAspect;
        } else {
            height = layoutHeight + 2 * layoutBorder;
            width = height * layoutAspect;
        }
        
        setActualLayoutHeight(height);
        setActualLayoutWidth(width);
    }, [layoutHeight, layoutWidth, layoutBorder, min]);

    useEffect(() => { 
        if (!image || layoutHeight === 0)
            return;
        const layoutAspect = layoutWidth / layoutHeight;
        if (layoutAspect > image.aspectRatio) {
            const newImageHeight = layoutHeight;
            const newImageWidth = image.aspectRatio * newImageHeight;
            setImageHeight(newImageHeight);
            setImageWidth(newImageWidth);
        }
        else {
            const newImageWidth = layoutWidth;
            const newImageHeight = newImageWidth / image.aspectRatio;
            setImageWidth(newImageWidth);
            setImageHeight(newImageHeight);
        }
    }, [layoutHeight, layoutWidth, image]);

    const onComplete = useCallback(() => {
        const canvas = document.createElement("canvas");
        const imageElement = document.getElementById(PHOTO_ID);

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        const imageWidth = actualLayoutWidth;
        const imageHeight = actualLayoutHeight;

        canvas.width = imageWidth * scaleX;
        canvas.height = imageHeight * scaleY;

        const ctx = canvas.getContext("2d");

        // fill the background color
        ctx.fillStyle = layoutColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // calculate the position and dimensions of the image
        const aspect = image.width / image.height;
        const layoutAspect = layoutWidth / layoutHeight;
        let drawWidth, drawHeight, x, y;
        if (aspect > layoutAspect) {
            drawWidth = (layoutWidth) * scaleX;
            drawHeight = drawWidth / aspect;
            x = (imageWidth * scaleX - drawWidth) / 2;
            y = (imageHeight * scaleY - drawHeight) / 2;
        } else {
            drawHeight = (layoutHeight) * scaleY;
            drawWidth = drawHeight * aspect;
            y = (imageHeight * scaleY - drawHeight) / 2;
            x = (imageWidth * scaleX - drawWidth) / 2;
        }

        console.log('canvas width', canvas.width);
        console.log('canvas height', canvas.height);
        console.log('draw width', drawWidth);
        console.log('draw height', drawHeight);
        console.log('draw x', x);
        console.log('draw y', y);

        // draw the image at the calculated position and dimensions
        ctx.drawImage(imageElement, x, y, drawWidth, drawHeight);

        const src = canvas.toDataURL("image/jpeg");

        let height = imageHeight;
        let width = imageWidth;
        let aspectRatio = imageWidth / imageHeight;

        if (aspectRatio > 1) {
            width = min(DEFAULT_WIDTH, width);
            height = width / aspectRatio;
        } else {
            height = min(DEFAULT_HEIGHT, height);
            width = aspectRatio * height;
        }

        dispatch(
            setImage({
                ...image,
                src,
                height,
                width,
                aspectRatio,
            })
        );
        dispatch(setLayoutDimension(imageHeight, imageWidth));
        dispatch(setActiveFeature(null));
        dispatch(layoutImage(false));
    }, [dispatch, image, layoutHeight, layoutWidth, layoutBorder, layoutColor, actualLayoutHeight, actualLayoutWidth, min]);

    return (
        <Container
            height={actualLayoutHeight}            
            width={actualLayoutWidth}
            color={layoutColor}
        >
            <ChildWrapper>
                <Child height={imageHeight} width={imageWidth}>
                    {children}
                </Child>
            </ChildWrapper>
        </Container>
    );
}

export default LayoutWrapper;