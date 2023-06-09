import { useDispatch, useSelector } from 'react-redux';
import { Photo, ResizeWrapper, Container, Display } from './styles';
import React, { useState, useEffect } from 'react';
import Wrapper from '../wrappers/Wrapper';
import { setImage } from '@/store/actions/image';
import { setResize } from '@/store/actions/resize';
import { setDrag } from '@/store/actions/drag';
import ZoomWrapper from '../wrappers/ZoomWrapper';
import { setZoom } from '@/store/actions/zoom';
import DragWrapper from '../wrappers/DragWrapper';
import { FeatureOptionsList } from '@/data/feature-options';
import { PHOTO_ID } from '@/constants/Document';

const Manipulator = () => { 
    const dispatch = useDispatch();
    const image = useSelector(({ img }) => img.image);
    const feature = useSelector(({ ftr }) => ftr.feature);
    const resize = useSelector(({ rsz }) => rsz.resize);

    const [size, setSize] = useState({ width: image.width, height: image.height });

    const resizeHandler = (event, { size }) => {
        event.preventDefault();
        if (!resize)
            return;
        setSize(size);
        dispatch(setImage({
            ...image,
            width: size.width,
            height: size.height,
            aspectRatio: (size.width / size.height),
        }));
    }

    useEffect(() => { 
        console.log('feature', feature);
        if (feature && feature.featureOptionsId) {
            const featureOptions = FeatureOptionsList.find(fo => fo.id === feature.featureOptionsId);
            dispatch(setDrag(!featureOptions.lockDrag));
            dispatch(setZoom(!featureOptions.lockZoom));
        } else {
            dispatch(setDrag(true));
            dispatch(setZoom(true));
        }
    }, [feature, dispatch]);

    useEffect(() => { 
        console.log('image', image);
        if(image)
            setSize({
                width: image.width,
                height: image.height
            });
    }, [image]);

    useEffect(() => {
        const handleDrag = (event) => {
            event.preventDefault();
        };

        document.addEventListener("dragstart", handleDrag);
        return () => {
            document.removeEventListener("dragstart", handleDrag);
        };
    }, []);

    return (
        <Container>
            {/* <ResizeWrapper width={size.width} height={size.height} onResize={resizeHandler}> */}
                <DragWrapper>
                    <Display height={image.height} width={image.width}>
                        <Wrapper>
                            <ZoomWrapper>
                                <Photo
                                    id={PHOTO_ID}
                                    src={image.src}
                                    alt={image.alt}
                                />
                            </ZoomWrapper>
                        </Wrapper>
                    </Display>
                </DragWrapper>
            {/* </ResizeWrapper> */}
        </Container>
    );
}

export default Manipulator;