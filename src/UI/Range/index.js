import FormRange from 'react-bootstrap/FormRange';
import { useTheme } from 'styled-components';

const Range = ({ value, setValue, disabled = false, minValue, maxValue, color, step }) => { 
    const theme = useTheme();
    return (
        <FormRange
            value={value}
            onChange={e => setValue(e.target.value)}
            disabled={disabled}
            min={minValue}
            max={maxValue}
            color={color ? color : theme.colors.blue}
            step={step}
        />
    );
}

export default Range;