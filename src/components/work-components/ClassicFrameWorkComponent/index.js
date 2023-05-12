import { Frames } from '@/data/frames';
import { Container, Frame, FrameContent, FrameText, Grid, FrameTitle } from './styles';
import { FrameCategories } from '@/types/FrameCategories';
import { useDispatch, useSelector } from 'react-redux';
import { frameImage, setFrame, setFrameColor, setFrameSize } from '@/store/actions/frame';
import { Button } from '@/UI';
import InputSection from '@/components/InputSection';
import ColorSelector from '@/components/ColorSelector';
import { MAX_FRAME_SIZE, MIN_FRAME_SIZE } from '@/constants/Range';

const ClassicFrameWorkComponent = () => { 
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const frameId = useSelector(({ frm }) => frm.frameId);
    const { size: frameSize, color: frameColor } = useSelector(({ frm }) => frm.frameParams);

    const frames = Frames.filter(frame => frame.category === FrameCategories.CLASSIC);
    const length = frames.length;
    const cols = 3;
    const rows = length / cols + (length % cols !== 0);

    const frameClickHandler = (id) => {
        if (!image)
            return;
        dispatch(setFrame(id));
    }

    const frameSizeHandler = (size) => { 
        if (!image)
            return;
        dispatch(setFrameSize(size));
    }

    const frameColorHandler = (color) => { 
        if (!image)
            return;
        dispatch(setFrameColor(color));
    }

    const applyFrameHandler = () => { 
        if (!image)
            return;
        dispatch(frameImage(true));
    }

    return (
        <Container>
            <Grid rows={rows} cols={cols}>
                {frames.map(({ id, title }) => (
                    <Frame
                        key={id}
                        title={title}
                        active={id === frameId}
                        onClick={() => frameClickHandler(id)}
                        frameColor={frameColor}
                    >
                        <FrameContent>
                            <FrameText>{title}</FrameText>
                        </FrameContent>
                    </Frame>
                ))}
            </Grid>
            <div style={{ height: 10 }} />
            <InputSection
                title={'Frame Size'}
                value={frameSize}
                setValue={frameSizeHandler}
                placeholder={'Frame Size'}
                minValue={MIN_FRAME_SIZE}
                maxValue={MAX_FRAME_SIZE}
                step={1}
                type={'number'}
            />
            <div style={{ height: 10 }} />
            <FrameTitle>Frame Color</FrameTitle>
            <ColorSelector
                color={frameColor}
                setColor={frameColorHandler}
            />
            <div style={{ height: 10 }} />
            <Button text={'Apply'} onClick={applyFrameHandler} size={'sm'} />
        </Container>
    );
}

export default ClassicFrameWorkComponent;