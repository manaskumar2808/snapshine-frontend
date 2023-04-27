import { Button as Btn, Spinner } from "react-bootstrap";

const Button = ({
    text,
    icon = null,
    color = 'primary',
    size = 'md',
    borderRadius = 5,
    active = false,
    disabled = false,
    loading = false,
    loadingText = 'Loading...',
    loadingIcon = <Spinner />,
    ...props
}) => { 
    return (
        <Btn
            variant={color}
            size={size}
            active={active}
            style={{ borderRadius }}
            disabled={disabled || loading}
            {...props}
        >
            {
                loading ?
                (loadingIcon ? loadingIcon : loadingText) :
                (icon ? icon : text)
            }
        </Btn>
    );
}

export default Button;