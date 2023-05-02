import { Container, CropContent, CropDimension, CropDimensionSection, CropOption, CropText, Grid } from './styles';
import { useTheme } from 'styled-components';
import { Button, Input } from '@/UI';
import { CropOptions, lockAspectRatio, updateCropWithAspectRatio } from '@/data/crop-options';
import { useDispatch, useSelector } from 'react-redux';
import { cropImage, setCropOption, setCropParams } from '@/store/actions/crop';
import { useCallback, useEffect, useState } from 'react';
import IconComponent from '../IconComponent';

const CropWorkComponent = () => { 
    const dispatch = useDispatch();
    const theme = useTheme();

    const image = useSelector(({ img }) => img.image);
    const crop = useSelector(({ crp }) => crp.cropParams);
    const cropOption = useSelector(({ crp }) => crp.cropOption);

    const iconSize = 23;
    const iconColor = theme.colors.dark;

    useEffect(() => { 
        if (crop)
            console.log('crop', crop);
    }, [crop]);

    const cropOptionClickHandler = (c) => {
        dispatch(setCropOption(c));
        dispatch(setCropParams(c.cropFunction(crop, image)));
    }

    const applyCropHandler = () => { 
        dispatch(cropImage(true));
    }

    const heightChangeHandler = (height) => { 
        const h = height ? parseFloat(height) : 0;
        dispatch(setCropParams(lockAspectRatio({...crop, height: h}, crop, image, cropOption)));
    }

    const widthChangeHandler = (width) => { 
        const w = width ? parseFloat(width) : 0;
        dispatch(setCropParams(lockAspectRatio({...crop, width: w}, crop, image, cropOption)));
    }

    const aspectChangeHandler = (aspect) => { 
        aspect = parseFloat(aspect);
        dispatch(setCropParams(updateCropWithAspectRatio(crop, image, aspect)));
    }

    return (
        <Container>
            <Grid>
                {
                    CropOptions.map(({ id, text, cropFunction }) => <CropOption
                            key={id}
                            onClick={() => cropOptionClickHandler({ id, text, cropFunction })}
                            active={id === cropOption.id}
                        >
                            <CropContent>
                                {<IconComponent id={id} size={iconSize} color={iconColor} />}
                                <CropText>{text}</CropText>
                            </CropContent>
                        </CropOption>
                    )
                }
            </Grid>
            <div style={{ height: 10 }} />
            <CropDimensionSection>
                <CropDimension>
                    <Input type={'number'} size={'md'} value={parseFloat(crop.width).toFixed(0)} setValue={widthChangeHandler} />
                </CropDimension>
                <div style={{ width: 5 }} />
                x
                <div style={{ width: 5 }} />
                <CropDimension>
                    <Input type={'number'} size={'md'} value={parseFloat(crop.height).toFixed(0)} setValue={heightChangeHandler} />
                </CropDimension>
            </CropDimensionSection>
            <div style={{ height: 10 }} />
            <CropDimensionSection>
                <CropDimension>
                    <Input type={'number'} size={'md'} value={parseFloat(crop.aspect).toFixed(2)} setValue={aspectChangeHandler} disabled />
                </CropDimension>
            </CropDimensionSection>
            <div style={{ height: 10 }} />
            <Button text={'Apply'} size={'sm'} onClick={applyCropHandler} />
        </Container>
    );
}

export default CropWorkComponent;