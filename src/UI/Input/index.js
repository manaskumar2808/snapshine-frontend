import { Form } from 'react-bootstrap';
import { useTheme } from 'styled-components';

const Input = ({
    value,
    setValue,
    label,
    type = 'text',
    disabled = false,
    readOnly = false,
    placeholder,
    size = 'md',
}) => {
    const theme = useTheme();

    return (
        <Form.Group>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
                disabled={disabled}
                readOnly={readOnly}
                size={size}
                style={{ 
                    backgroundColor: theme.colors.inputbg, 
                    color: theme.colors.foreground 
                }}
            />
        </Form.Group>
    );
}

export default Input;