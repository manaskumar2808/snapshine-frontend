import { Layouts } from '@/data/layouts';
import { Container, Grid, Layout, LayoutContent, LayoutDimension, LayoutDimensionSection, LayoutText, LayoutTitle } from './styles';
import IconComponent from '@/components/IconComponent';
import { useDispatch, useSelector } from 'react-redux';
import { layoutImage, setLayout, setLayoutBorder, setLayoutColor, setLayoutDimension } from '@/store/actions/layout';
import { getLayoutDimensions } from '@/utilities/layout';
import { Button, Input } from '@/UI';
import { useTheme } from 'styled-components';
import { useEffect } from 'react';
import InputSection from '@/components/InputSection';
import { MAX_LAYOUT_BORDER, MIN_LAYOUT_BORDER } from '@/constants/Range';
import ColorSelector from '@/components/ColorSelector';

const LayoutWorkComponent = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const { height: layoutHeight, width: layoutWidth, color: layoutColor, border: layoutBorder } = useSelector(({ lyt }) => lyt.layoutParams);
    const layoutId = useSelector(({ lyt }) => lyt.layoutId);

    const iconSize = 23;
    const iconColor = theme.colors.dark;

    const length = Layouts.length;
    const cols = 3;
    const rows = length / cols + (length % cols !== 0);

    useEffect(() => { 
        if (!image)
            return;
        if (!layoutId)
            dispatch(setLayoutDimension(image.height, image.width));
    }, [image, layoutId, dispatch]);

    const layoutClickHandler = (layoutId) => {
        if (!image)
            return;
        dispatch(setLayout(layoutId));
        const { aspectRatio } = Layouts.find(l => l.id === layoutId);
        const { layoutWidth, layoutHeight } = getLayoutDimensions(image, aspectRatio);
        dispatch(setLayoutDimension(layoutHeight, layoutWidth));
    }

    const heightChangeHandler = (height) => {
        const { aspectRatio } = Layouts.find(l => l.id === layoutId);
        const width = aspectRatio * height;
        dispatch(setLayoutDimension(height, width));
    }

    const widthChangeHandler = (width) => {  
        const { aspectRatio } = Layouts.find(l => l.id === layoutId);
        const height = width / aspectRatio;
        dispatch(setLayoutDimension(height, width));
    }

    // const aspectChangeHandler = () => {
        
    // }

    const layoutBorderHandler = (border) => { 
        if (!image)
            return;
        dispatch(setLayoutBorder(border));
    }

    const layoutColorHandler = (color) => { 
        if (!image)
            return;
        dispatch(setLayoutColor(color));
    }

    const applyLayoutHandler = () => {
        if (!image)
            return;
        dispatch(layoutImage(true));
    }

    return (
        <Container>
            <div style={{ height: 10 }} />
            <LayoutTitle>Layout Dimensions</LayoutTitle>
            <Grid cols={cols} rows={rows}>
                {
                    Layouts.map(({ id, title }) => (
                        <Layout key={id} onClick={() => layoutClickHandler(id)} active={id === layoutId}>
                            <LayoutContent>
                                {<IconComponent id={id} size={iconSize} color={iconColor} />}
                                <LayoutText>{title}</LayoutText>
                            </LayoutContent>
                        </Layout>
                    ))
                }
            </Grid>
            <div style={{ height: 10 }} />
            <LayoutDimensionSection>
                <LayoutDimension>
                    <Input type={'number'} size={'md'} value={parseFloat(layoutWidth).toFixed(0)} setValue={widthChangeHandler} />
                </LayoutDimension>
                <div style={{ width: 5 }} />
                x
                <div style={{ width: 5 }} />
                <LayoutDimension>
                    <Input type={'number'} size={'md'} value={parseFloat(layoutHeight).toFixed(0)} setValue={heightChangeHandler} />
                </LayoutDimension>
            </LayoutDimensionSection>
            <div style={{ height: 10 }} />
            {/* <LayoutDimensionSection>
                <LayoutDimension>
                    <Input type={'number'} size={'md'} value={parseFloat(layoutParams.aspect).toFixed(2)} setValue={aspectChangeHandler} disabled />
                </LayoutDimension>
            </LayoutDimensionSection> */}
            <div style={{ height: 10 }} />
            <InputSection
                title={'Layout Border'}
                value={layoutBorder}
                setValue={layoutBorderHandler}
                placeholder={'Border'}
                minValue={MIN_LAYOUT_BORDER}
                maxValue={MAX_LAYOUT_BORDER}
                step={1}
                type={'number'}
            />
            <div style={{ height: 10 }} />
            <LayoutTitle>Layout Color</LayoutTitle>
            <ColorSelector
                color={layoutColor}
                setColor={layoutColorHandler}
            />
            <div style={{ height: 10 }} />
            <Button text={'Apply'} onClick={applyLayoutHandler} size={'sm'} />
        </Container>
    );
}

export default LayoutWorkComponent;