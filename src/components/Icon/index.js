import { Container, Display, Text } from './styles';
import { useTheme } from 'styled-components';

const Icon = ({ IconComponent, active, text, toolClickHandler }) => { 
    const theme = useTheme();

    return (
        <Container onClick={toolClickHandler} active={active}>
            <Display>
                <IconComponent size={25} color={theme.colors.dark} />
            </Display>
            {text && text.trim().length && <Text>
                {text}
            </Text>}
        </Container>
    );
}

export default Icon;