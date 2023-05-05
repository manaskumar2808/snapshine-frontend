import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { setImage } from '@/store/actions/image';
import { setActiveFeature } from '@/store/actions/feature';
import { useCallback, useEffect } from 'react';
import { PHOTO_ID } from '@/constants/Document';
import { invertImage } from '@/store/actions/invert';

const InvertWrapper = ({ children }) => {
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const invert = useSelector(({ ivt }) => ivt.invert);
    const active = useSelector(({ ivt }) => ivt.active);

    useEffect(() => { 
        if (active)
            onInvertComplete();
    }, [active, onInvertComplete]);
    
    
    const onInvertComplete = useCallback(() => {
        const canvas = document.createElement("canvas");
        const imageElement = document.getElementById(PHOTO_ID);
        
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        
        canvas.width = image.width * scaleX;
        canvas.height = image.height * scaleY;
        const ctx = canvas.getContext("2d");
        
        const invertPct = invert ? 100 : 0;

        ctx.filter = `
            invert(${invertPct}%)
        `;

        ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

        const src = canvas.toDataURL("image/jpeg");

        dispatch(setImage({...image, src }));
        dispatch(setActiveFeature(null));
        dispatch(invertImage(false));
    }, [invert, image, dispatch]);
    
    return (
        <Container
            invert={invert ? 100 : 0}
        >
            {children}
        </Container>
    );
}

export default InvertWrapper;