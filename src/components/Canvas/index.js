import { useSelector } from 'react-redux';
import { Container } from './styles';
import Uploader from '../Uploader';
import Manipulator from '../Manipulator';

const Canvas = () => { 
    const image = useSelector(({ img }) => img.image);

    return (
        <Container>
            {
                image ? 
                    <Manipulator />
                    :
                    <Uploader />
            }
        </Container>
    );
}

export default Canvas;