import { Input, Range } from '@/UI';
import { Container, InputContainer, InputRow, InputTitle, InputTitleContainer, RangeContainer } from './styles';

const InputSection = ({ value, setValue, placeholder, minValue, maxValue, step, type, title }) => {
    return (
        <Container>
            <InputRow>
                <InputTitleContainer>
                    <InputTitle>{title}</InputTitle>
                </InputTitleContainer>
                <InputContainer>
                    <Input
                        value={value}
                        setValue={setValue}
                        placeholder={placeholder}
                        type={type}
                    />
                </InputContainer>
            </InputRow>
            <RangeContainer>
                <Range
                    value={value}
                    setValue={setValue}
                    minValue={minValue}
                    maxValue={maxValue}
                    step={step}
                />
            </RangeContainer>
        </Container>
    );
}

export default InputSection;