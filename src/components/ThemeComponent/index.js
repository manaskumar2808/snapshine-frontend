import { Container, Theme } from './styles';

const ThemeComponent = ({ src, alt, size }) => { 
    return (
        <Container size={size}>
            <Theme
                loader={({ src }) => src}
                src={src}
                alt={alt}
                fill={true}
            />
        </Container>
    );
}

export default ThemeComponent;