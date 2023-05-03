import { useSelector } from 'react-redux';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ZoomWrapper = ({ children }) => {
    const image = useSelector(({ img }) => img.image);
    const zoom = useSelector(({ zum }) => zum.zoom);
    
    if (!zoom)
        return children;

    return (
        <TransformWrapper
            initialScale={1}
            initialPositionX={image.x}
            initialPositionY={image.y}
            options={{
                limitToBounds: false,
                centerContent: false,
            }}
        >
            <TransformComponent>
                {children}
            </TransformComponent>      
        </TransformWrapper>
    );
}

export default ZoomWrapper;