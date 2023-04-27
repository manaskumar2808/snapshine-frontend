import { useSelector } from 'react-redux';
import { DragWrapper, Photo, ResizeWrapper, Container, Display } from './styles';
import { useState, useEffect } from 'react';

const Manipulator = () => { 
    const image = useSelector(({img}) => img.image);

    const [size, setSize] = useState({ width: 500, height: 500 });

    const resizeHandler = (event, { size }) => {
        event.preventDefault();
        setSize(size);
    }

    useEffect(() => {
        const handleDrag = (event) => {
            event.preventDefault();
        };

        document.addEventListener("dragstart", handleDrag);
        return () => {
        document.removeEventListener("dragstart", handleDrag);
        };
    }, []);

    return (
        <Container>
            <ResizeWrapper width={size.width} height={size.height} onResize={resizeHandler}>
                <DragWrapper>
                    <Display width={size.width} height={size.height}>
                        <Photo src={image.src} alt={image.alt} />
                    </Display>
                </DragWrapper>
            </ResizeWrapper>
        </Container>
    );
}

export default Manipulator;