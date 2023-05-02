import { useDispatch, useSelector } from 'react-redux';
import { Photo, ResizeWrapper, Container, Display } from './styles';
import React, { useState, useEffect } from 'react';
import Wrapper from '../Wrapper';
import { setImage } from '@/store/actions/image';
import { setResize } from '@/store/actions/resize';
import { setDrag } from '@/store/actions/drag';
import ZoomWrapper from '../ZoomWrapper';
import { setZoom } from '@/store/actions/zoom';
import DragWrapper from '../DragWrapper';

const Manipulator = () => { 
    const dispatch = useDispatch();
    const image = useSelector(({ img }) => img.image);
    const feature = useSelector(({ ftr }) => ftr.feature);
    const resize = useSelector(({ rsz }) => rsz.resize);
    const drag = useSelector(({ drg }) => drg.drag);

    const [size, setSize] = useState({ width: image.width, height: image.height });
    const [position, setPosition] = useState({ x: 0, y: 0 });

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
        if (feature && feature.featureOptions) {
            dispatch(setDrag(!feature.featureOptions.lockDrag));
            dispatch(setZoom(!feature.featureOptions.lockZoom));
        } else {
            dispatch(setDrag(true));
            dispatch(setZoom(true));
        }
    }, [feature, dispatch]);

    useEffect(() => { 
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
        <Container width={size.width} height={size.height}>
            {/* <ResizeWrapper width={size.width} height={size.height} onResize={resizeHandler}> */}
                <DragWrapper>
                    <Display>
                        <Wrapper>
                            <ZoomWrapper>
                                <Photo src={image.src} alt={image.alt} />
                            </ZoomWrapper>
                        </Wrapper>
                    </Display>
                </DragWrapper>
            {/* </ResizeWrapper> */}
        </Container>
    );
}

export default Manipulator;