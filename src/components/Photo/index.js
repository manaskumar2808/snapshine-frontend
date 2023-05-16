import { useCallback, useEffect, useState } from 'react';
import { Image, Layer, Stage } from 'react-konva';
import { useSelector } from 'react-redux';

const Photo = ({ draggable = false }) => { 
    const image = useSelector(({ img }) => img.image);

    const [imageObj, setImageObj] = useState(null);

    useEffect(() => { 
        if (!image)
            return;
        console.log('image', image);

        const loadImageObj = async () => { 
            const io = await getImageObj();
            console.log('imageObj', io);
            setImageObj(io);
        }

        (async () => await loadImageObj())();
    }, [getImageObj, image]);

    const getImageObj = useCallback(async () => {
        const imageObj = new window.Image();
        imageObj.src = image.src;

        return new Promise((resolve) => {
            imageObj.onload = () => {
                resolve({
                    obj: imageObj,
                    alt: imageObj.alt,
                    height: imageObj.height,
                    width: imageObj.width,
                    x: imageObj.x,
                    y: imageObj.y,
                });
            };
        });
    }, [image]);

    if (!imageObj)
        return null;
    
    return (
        <Image
            image={imageObj.obj}
            alt={image.alt}
            height={image.height}
            width={image.width}
            x={0}
            y={0}
            draggable={draggable}
        />
    );
}

export default Photo;