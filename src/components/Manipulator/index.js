import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import Wrapper from '../wrappers/Wrapper';
import { setDrag } from '@/store/actions/drag';
import { setZoom } from '@/store/actions/zoom';
import { FeatureOptionsList } from '@/data/feature-options';
import { Image, Layer, Stage } from 'react-konva';
import Photo from '../Photo';

const Manipulator = () => { 
    const dispatch = useDispatch();
    const feature = useSelector(({ ftr }) => ftr.feature);

    const stageRef = useRef(null);

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

    return (
        <Stage ref={stageRef} height={720} width={1000}>
            <Wrapper stageRef={stageRef}>
                <Photo draggable />
            </Wrapper>
        </Stage>
    );
}

export default Manipulator;