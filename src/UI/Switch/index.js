import { Form } from 'react-bootstrap';
import { useTheme } from 'styled-components';

const Switch = ({ label, name, size = 'md', color, checked, setChecked }) => {
    const theme = useTheme();

    return (
        <Form.Check
            type="switch"
            label={label}
            name={name}
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
            size={size}
            color={color ? color : theme.colors.blue}
        />
    );
}

export default Switch;