import Draggable from "react-draggable";
import { Container, DragContent, DragHandler, DragIcon } from './styles';
import { FiNavigation } from 'react-icons/fi';
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";

const Handle = ({ disabled }) => { 
    const theme = useTheme();

    const iconColor = disabled ? theme.colors.blue : theme.colors.dark;
    const iconSize = 16;

    return (
        <DragHandler disabled={disabled}>
            <DragContent>
                <DragIcon>
                    <FiNavigation
                        className='handle-button'
                        size={iconSize}
                        color={iconColor}
                        style={{ margin: 0 }}
                    />
                </DragIcon>
            </DragContent>
        </DragHandler>
    );
}

const DragWrapper = ({ children }) => {
    const drag = useSelector(({ drg }) => drg.drag);

    if (!drag) {
        return (
            <Container>
                {children}
                <Handle disabled={true} />
            </Container>
        );
    }

    return (
        <Draggable handle='.handle-button'>
            <Container>
                {children}
                <Handle disabled={false} />
            </Container>
        </Draggable>
    );
}

export default DragWrapper;