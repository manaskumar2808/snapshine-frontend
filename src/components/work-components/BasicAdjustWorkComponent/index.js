import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { basicAdjustImage, setBlur, setBrightness, setContrast, setSaturation, setSharpness } from '@/store/actions/basic-adjust';
import { Button, Input, Range } from '@/UI';
import { MAX_BLUR, MAX_BRIGHTNESS, MAX_CONTRAST, MAX_SATURATION, MAX_SHARPNESS, MIN_BLUR, MIN_BRIGHTNESS, MIN_CONTRAST, MIN_SATURATION, MIN_SHARPNESS } from '@/constants/Range';
import InputSection from '@/components/InputSection';

const BasicAdjustWorkComponent = () => {
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const brightness = useSelector(({ bad }) => bad.brightness);
    const contrast = useSelector(({ bad }) => bad.contrast);
    const saturation = useSelector(({ bad }) => bad.saturation);
    const sharpness = useSelector(({ bad }) => bad.sharpness);
    const blur = useSelector(({ bad }) => bad.blur);

    const brightnessHandler = (brightness) => {
        if (!image)
            return;
        dispatch(setBrightness(brightness));
    }

    const contrastHandler = (contrast) => {
        if (!image)
            return;
        dispatch(setContrast(contrast));
    }

    const saturationHandler = (saturation) => {
        if (!image)
            return;
        dispatch(setSaturation(saturation));
    }

    const sharpnessHandler = (sharpness) => {
        if (!image)
            return;
        dispatch(setSharpness(sharpness));
    }

    const blurHandler = (blur) => {
        if (!image)
            return;
        dispatch(setBlur(blur));
    }

    const applyBasicAdjustHandler = () => {
        if (!image)
            return;
        dispatch(basicAdjustImage(true));
    }

    return (
        <Container>
            <InputSection
                value={brightness}
                setValue={brightnessHandler}
                maxValue={MAX_BRIGHTNESS}
                minValue={MIN_BRIGHTNESS}
                placeholder={'Brightness'}
                title={'Brightness'}
                type={'number'}
                step={1}
            />

            <InputSection
                value={contrast}
                setValue={contrastHandler}
                maxValue={MAX_CONTRAST}
                minValue={MIN_CONTRAST}
                placeholder={'Contrast'}
                title={'Contrast'}
                type={'number'}
                step={1}
            />

            <InputSection
                value={saturation}
                setValue={saturationHandler}
                maxValue={MAX_SATURATION}
                minValue={MIN_SATURATION}
                placeholder={'Saturation'}
                title={'Saturation'}
                type={'number'}
                step={1}
            />

            <InputSection
                value={sharpness}
                setValue={sharpnessHandler}
                maxValue={MAX_SHARPNESS}
                minValue={MIN_SHARPNESS}
                placeholder={'Sharpness'}
                title={'Sharpness'}
                type={'number'}
                step={0.01}
            />

            <InputSection
                value={blur}
                setValue={blurHandler}
                maxValue={MAX_BLUR}
                minValue={MIN_BLUR}
                placeholder={'Blur'}
                title={'Blur'}
                type={'number'}
                step={0.01}
            />

            <Button text={'Apply'} size={'sm'} onClick={applyBasicAdjustHandler} />
        </Container>
    );
}

export default BasicAdjustWorkComponent;