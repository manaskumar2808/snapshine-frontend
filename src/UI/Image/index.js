import { Container, Photo } from "./styles";

const Image = ({ src, alt, fit = 'cover' }) => { 
    return (
        <Container>
            <Photo
                src={src}
                layout={'fill'}
                alt={alt}
                fit={fit}
            />
        </Container>
    );
}

export default Image;