import { useCallback, useEffect, useRef, useState } from 'react';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '@/store/actions/image';
import { cropImage, setCropParams } from '@/store/actions/crop';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from '@/constants/Default';
import { setActiveFeature } from '@/store/actions/feature';
import { lockAspectRatio } from '@/utilities/crop';
import { CropOptions } from '@/data/crop-options';
import { PHOTO_ID } from '@/constants/Document';
import { Rect, Transformer } from 'react-konva';
import { useTheme } from 'styled-components';

const CropWrapper = ({ children, stageRef }) => { 
    const dispatch = useDispatch();
    const theme = useTheme();

    const image = useSelector(({ img }) => img.image);
    const active = useSelector(({ crp }) => crp.active);
    const crop = useSelector(({ crp }) => crp.cropParams);
    const cropOptionId = useSelector(({ crp }) => crp.cropOptionId);

    const [cropRect, setCropRect] = useState(null);
    const transformerRef = useRef(null);

    const strokeWidth = 2;

    useEffect(() => { 
        if (!image)
            return;
        setCropRect({ x: 0, y: 0, width: image.width, height: image.height });
    }, [image]);

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
            onComplete();
    }, [active, onComplete]);
    
    const setCrop = (c) => { 
        const cropOption = CropOptions.find(co => co.id === cropOptionId);
        dispatch(setCropParams(lockAspectRatio(c, crop, image, cropOption)));
    }

    const onComplete = useCallback(() => {
        const { x, y, width, height } = cropRect;
        const canvas = stageRef.current.toCanvas({x,y,width,height});
        const src = canvas.toDataURL('image/jpeg');

        dispatch(setImage({ ...image, src }));
        dispatch(setActiveFeature(null));
        dispatch(cropImage(false));
    }, [image, dispatch, cropRect, stageRef]);

    const onDragEnd = (e) => {
        setCropRect({
            ...cropRect,
            x: e.target.x(),
            y: e.target.y()
        });
    }

    const onTransformEnd = (e) => {
        const node = e.target;
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();

        setCropRect({
            ...cropRect,
            width: Math.max(2, node.width() * scaleX),
            height: Math.max(2, node.height() * scaleY),
            x: node.x(),
            y: node.y()
        });
        
        node.scaleX(1);
        node.scaleY(1);
    }

    return (
        <Container>
            {children}
            {cropRect && (
                <>
                    <Rect
                        x={cropRect.x}
                        y={cropRect.y}
                        width={cropRect.width}
                        height={cropRect.height}
                        stroke={theme.colors.red}
                        strokeWidth={strokeWidth}
                        draggable
                        onDragEnd={onDragEnd}
                        onTransformEnd={onTransformEnd}
                        
                    />  
                    <Transformer
                        anchorSize={10}
                        borderDash={[6, 2]}
                        borderStroke={theme.colors.red}
                        ref={transformerRef}
                        boundBoxFunc={(oldBox, newBox) => {
                            if (newBox.width < 10 || newBox.height < 10)
                                return oldBox;
                            return newBox;
                        }}
                        enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
                        resizeEnabled
                    />
                </>
            )}
        </Container>
    );
}

export default CropWrapper;