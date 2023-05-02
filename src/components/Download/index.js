import { useSelector } from 'react-redux';
import { Button } from '../../UI';

const Download = () => { 
    const image = useSelector(({img}) => img.image);

    const downloadHandler = () => { 
        if (!image)
            return;
        const link = document.createElement('a');
        link.download = image.alt;
        link.href = image.src;
        link.click();
    }

    return <Button
        text={'Download'}
        size={'sm'}
        onClick={downloadHandler}
        disabled={!image}
    />
}

export default Download;