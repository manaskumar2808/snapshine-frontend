import { Input, Button, Range } from '@/UI';
import { Container, RotateInputSection } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { rotateImage, setDegree } from '@/store/actions/rotate';

const RotateWorkComponent = () => { 
    const dispatch = useDispatch();

    const degree = useSelector(({ rot }) => rot.degree);
    const image = useSelector(({ img }) => img.image);

    const degreeHandler = (degree) => {
        if (!image)
            return;
        dispatch(setDegree(degree));
    }

    const applyRotateHandler = () => {
        if (!image)
            return;
        dispatch(rotateImage(true));
    }

    return (
        <Container>
            <RotateInputSection>
                <Range value={degree} setValue={degreeHandler} minValue={0} maxValue={360} step={90} />
            </RotateInputSection>
            <div style={{ height: 10 }} />
            <RotateInputSection>
                <Input placeholder={'Degrees'} value={degree} setValue={degreeHandler} />
            </RotateInputSection>
            <div style={{ height: 10 }} />
            <Button text={'Apply'} onClick={applyRotateHandler} size={'sm'} />
        </Container>
    );
}

export default RotateWorkComponent;