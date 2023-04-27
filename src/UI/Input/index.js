import { Form } from 'react-bootstrap';

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
            />
        </Form.Group>
    );
}

export default Input;