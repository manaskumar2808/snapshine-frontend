import { Container, CropContent, CropDimension, CropDimensionSection, CropOption, CropText, Grid } from './styles';
import { useTheme } from 'styled-components';
import { Button, Input } from '@/UI';
import { CropOptions } from '@/data/crop-options';
import { useDispatch, useSelector } from 'react-redux';
import { cropImage, setCropOption, setCropParams } from '@/store/actions/crop';

const CropWorkComponent = () => { 
    const dispatch = useDispatch();
    const theme = useTheme();

    const image = useSelector(({ img }) => img.image);
    const crop = useSelector(({ crp }) => crp.cropParams);
    const cropOption = useSelector(({ crp }) => crp.cropOption);

    const iconSize = 23;
    const iconColor = theme.colors.dark;

    const cropOptionClickHandler = (c) => {
        dispatch(setCropOption(c));
        dispatch(setCropParams(c.cropFunction(crop, image)));
    }

    const applyCropHandler = () => { 
        dispatch(cropImage(true));
    }

    const heightChangeHandler = (height) => { 
        dispatch(setCropParams({
            ...crop,
            height: parseFloat(height)
        }));
    }

    const widthChangeHandler = (width) => { 
        dispatch(setCropParams({
            ...crop,
            width: parseFloat(width)
        }));
    }

    return (
        <Container>
            <Grid>
                {
                    CropOptions.map(({ id, text, IconComponent, cropFunction }) => <CropOption
                            key={id}
                            onClick={() => cropOptionClickHandler({ id, text, IconComponent, cropFunction })}
                            active={id === cropOption.id}
                        >
                            <CropContent>
                                {IconComponent && <IconComponent size={iconSize} color={iconColor} />}
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
            <Button text={'Apply'} size={'sm'} onClick={applyCropHandler} />
        </Container>
    );
}

export default CropWorkComponent;