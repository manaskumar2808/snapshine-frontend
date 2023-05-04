import { useDispatch, useSelector } from 'react-redux';
import { Container, InputContainer, InputRow, InputSection, InputTitle, InputTitleContainer } from './styles';
import { basicAdjustImage, setBlur, setBrightness, setContrast, setSaturation, setSharpness } from '@/store/actions/basic-adjust';
import { Button, Input, Range } from '@/UI';
import { MAX_BLUR, MAX_BRIGHTNESS, MAX_CONTRAST, MAX_SATURATION, MAX_SHARPNESS, MIN_BLUR, MIN_BRIGHTNESS, MIN_CONTRAST, MIN_SATURATION, MIN_SHARPNESS } from '@/constants/Range';

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
            <InputSection>
                <InputRow>
                    <InputTitleContainer>
                        <InputTitle>Brightness</InputTitle>
                    </InputTitleContainer>
                    <InputContainer>
                        <Input value={brightness} setValue={brightnessHandler} placeholder={'Brightness'} type={'number'} />
                    </InputContainer>
                </InputRow>
                <Range value={brightness} setValue={brightnessHandler} minValue={MIN_BRIGHTNESS} maxValue={MAX_BRIGHTNESS} step={1} />
            </InputSection>

            <InputSection>
                <InputRow>
                    <InputTitleContainer>
                        <InputTitle>Contrast</InputTitle>
                    </InputTitleContainer>
                    <InputContainer>
                        <Input value={contrast} setValue={contrastHandler} placeholder={'Contrast'} type={'number'} />
                    </InputContainer>
                </InputRow>
                <Range value={contrast} setValue={contrastHandler} minValue={MIN_CONTRAST} maxValue={MAX_CONTRAST} step={1} />
            </InputSection>

            <InputSection>
                <InputRow>
                    <InputTitleContainer>
                        <InputTitle>Saturation</InputTitle>
                    </InputTitleContainer>
                    <InputContainer>
                        <Input value={saturation} setValue={saturationHandler} placeholder={'Saturation'} type={'number'} />
                    </InputContainer>
                </InputRow>
                <Range value={saturation} setValue={saturationHandler} minValue={MIN_SATURATION} maxValue={MAX_SATURATION} step={1} />
            </InputSection>

            {/* <InputSection>
                <InputRow>
                    <InputTitleContainer>
                        <InputTitle>Sharpness</InputTitle>
                    </InputTitleContainer>
                    <InputContainer>
                        <Input value={sharpness} setValue={sharpnessHandler} placeholder={'Sharpness'} type={'number'} />
                    </InputContainer>
                </InputRow>
                <Range value={sharpness} setValue={sharpnessHandler} minValue={MIN_SHARPNESS} maxValue={MAX_SHARPNESS} step={0.01} />
            </InputSection> */}

            <InputSection>
                <InputRow>
                    <InputTitleContainer>
                        <InputTitle>Blur</InputTitle>
                    </InputTitleContainer>
                    <InputContainer>
                        <Input value={blur} setValue={blurHandler} placeholder={'Blur'} type={'number'} />
                    </InputContainer>
                </InputRow>
                <Range value={blur} setValue={blurHandler} minValue={MIN_BLUR} maxValue={MAX_BLUR} step={0.01} />
            </InputSection>

            <Button text={'Apply'} size={'sm'} onClick={applyBasicAdjustHandler} />
        </Container>
    );
}

export default BasicAdjustWorkComponent;