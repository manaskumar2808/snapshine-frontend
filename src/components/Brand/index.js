import { APP_NAME } from '@/constants/AppName';
import { Container, Text } from './styles'; 

const Brand = () => {
    return (
        <Container>
            <Text>
                {APP_NAME}
            </Text>
        </Container>
    );
}

export default Brand;