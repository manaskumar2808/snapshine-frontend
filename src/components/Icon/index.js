import IconComponent from '../IconComponent';
import { Container, Display, Text } from './styles';
import { useTheme } from 'styled-components';

const Icon = ({ id, active, text, toolClickHandler }) => { 
    const theme = useTheme();

    return (
        <Container onClick={toolClickHandler} active={active}>
            <Display>
                <IconComponent id={id} size={25} color={theme.colors.dark} />
                {text && text.trim().length && <Text>
                    {text}
                </Text>}
            </Display>
        </Container>
    );
}

export default Icon;