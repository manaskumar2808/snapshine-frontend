import { Button, Checkbox } from '@/UI';
import { Container, FlipInputSection } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { flipImage, setFlip } from '@/store/actions/flip';

const FlipWorkComponent = () => { 
    const dispatch = useDispatch();
    
    const image = useSelector(({ img }) => img.image);
    const flipX = useSelector(({ flp }) => flp.flipX);
    const flipY = useSelector(({ flp }) => flp.flipY);

    const flipXToggleHandler = () => {
        if (!image)
            return;
        dispatch(setFlip(!flipX, flipY));
    }

    const flipYToggleHandler = () => {
        if (!image)
            return;
        dispatch(setFlip(flipX, !flipY));
    }

    const applyFlipHandler = () => { 
        if (!image)
            return;
        dispatch(flipImage(true));
    }

    return (
        <Container>
            <FlipInputSection>
                <Checkbox label={'Flip Horizontally'} checked={flipX} setChecked={flipXToggleHandler} />
            </FlipInputSection>
            <FlipInputSection>
                <Checkbox label={'Flip Vertically'} checked={flipY} setChecked={flipYToggleHandler} />
            </FlipInputSection>
            <div style={{ height: 10 }} />
            <Button text={'Apply'} onClick={applyFlipHandler} size={'sm'} />
        </Container>
    );
}

export default FlipWorkComponent;