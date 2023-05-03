import FormRange from 'react-bootstrap/FormRange';
import { useTheme } from 'styled-components';

const Range = ({ value, defaultValue, setValue, disabled = false, minValue, maxValue, color }) => { 
    const theme = useTheme();
    return (
        <FormRange
            value={value}
            defaultValue={defaultValue}
            onChange={e => setValue(e.target.value)}
            disabled={disabled}
            min={minValue}
            max={maxValue}
            color={color ? color : theme.colors.blue}
        />
    );
}

export default Range;