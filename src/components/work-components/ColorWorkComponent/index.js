import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { Button } from '@/UI';
import { colorImage, setTemperature, setTint } from '@/store/actions/color';
import InputSection from '@/components/InputSection';
import { MAX_TEMPERATURE, MAX_TINT, MIN_TEMPERATURE, MIN_TINT } from '@/constants/Range';

const ColorWorkComponent = () => {
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const temperature = useSelector(({ clr }) => clr.temperature);
    const tint = useSelector(({ clr }) => clr.tint);

    const temperatureHandler = (temperature) => {
        if (!image)
            return;
        dispatch(setTemperature(temperature));
    }

    const tintHandler = (tint) => {
        if (!image)
            return;
        dispatch(setTint(tint));
    }

    const applyColorHandler = () => {
        if (!image)
            return;
        dispatch(colorImage(true));
    }

    return (
        <Container>
            <InputSection
                value={temperature}
                setValue={temperatureHandler}
                minValue={MIN_TEMPERATURE}
                maxValue={MAX_TEMPERATURE}
                placeholder={'Temperature'}
                step={1}
                title={'Temperature'}
                type={'number'}
            />
            <InputSection
                value={tint}
                setValue={tintHandler}
                minValue={MIN_TINT}
                maxValue={MAX_TINT}
                placeholder={'Tint'}
                step={1}
                title={'Tint'}
                type={'number'}
            />
            <Button text={'Apply'} size={'sm'} onClick={applyColorHandler} />
        </Container>
    );
}

export default ColorWorkComponent;