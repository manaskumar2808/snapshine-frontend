import { useDispatch, useSelector } from 'react-redux';
import { Container, SwitchContainer } from './styles';
import { Button, Switch } from '@/UI';
import { colorImage, setTemperature, setTint } from '@/store/actions/color';
import InputSection from '@/components/InputSection';
import { MAX_TEMPERATURE, MAX_TINT, MIN_TEMPERATURE, MIN_TINT } from '@/constants/Range';
import { invertImage, setInvert } from '@/store/actions/invert';

const InvertWorkComponent = () => {
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const invert = useSelector(({ ivt }) => ivt.invert);

    const invertHandler = (invert) => {
        if (!image)
            return;
        dispatch(setInvert(invert));
    }

    const applyInvertHandler = () => {
        if (!image)
            return;
        dispatch(invertImage(true));
    }

    return (
        <Container>
            <SwitchContainer>
                <Switch
                    checked={invert}
                    setChecked={invertHandler}
                    label={'Invert colors'}
                    name={'Invert'}
                />
            </SwitchContainer>
            <Button text={'Apply'} size={'sm'} onClick={applyInvertHandler} />
        </Container>
    );
}

export default InvertWorkComponent;