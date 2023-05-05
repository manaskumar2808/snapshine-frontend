import { Button } from '@/UI';
import { Container, UploadContainer, UploadText, Wrapper } from './styles';
import { FiPlus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setImage } from '@/store/actions/image';
import { useTheme } from 'styled-components';
import { useRef } from 'react';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from '@/constants/Default';

const Uploader = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const inputRef = useRef();

    const uploadClickHandler = () => {
        inputRef.current.click();
    }

    const calculateProperties = (file) => {
        return new Promise((resolve, reject) => {
            let aspectRatio = 1, height = 0, width = 0, naturalHeight = 0, naturalWidth = 0;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e => {
                const image = new Image();
                const src = reader.result;
                image.src = e.target.result;
                image.onload = () => {
                    naturalHeight = image.naturalHeight;
                    naturalWidth = image.naturalWidth;
                    aspectRatio = naturalWidth / naturalHeight;
                    if (naturalWidth > naturalHeight) {
                        height = DEFAULT_WIDTH / aspectRatio;
                        width = DEFAULT_WIDTH;
                    } else {
                        height = DEFAULT_HEIGHT;
                        width = aspectRatio * DEFAULT_HEIGHT;
                    }
                    resolve({ src, height, width, naturalHeight, naturalWidth, aspectRatio });
                }
                image.onerror = reject;
            }
            reader.onerror = reject;
        });
    }

    const uploadHandler = async (e) => { 
        const file = e.target.files[0];
        // const src = URL.createObjectURL(file);
        const alt = file.name;
        const path = file.pathname;
        const {src, height, width, naturalHeight, naturalWidth, aspectRatio} = await calculateProperties(file);
        setImageHandler({
            src, alt, path, height, width, naturalHeight, naturalWidth, aspectRatio
        });
    }

    const setImageHandler = (image) => { 
        try {
            dispatch(setImage(image));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>
            <Wrapper>
                <UploadContainer>
                    <FiPlus color={theme.colors.gray} size={50} />
                    <div style={{ height: 20 }} />
                    <UploadText>Drag or upload your own images</UploadText>
                    <div style={{ height: 20 }} />
                    <Button text={'Open Image'} htmlFor='image-input' onClick={uploadClickHandler} />
                    <input
                        id='image-input'
                        type='file'
                        style={{ display: 'none' }}
                        ref={inputRef}
                        onChange={uploadHandler}
                    />
                </UploadContainer>
            </Wrapper>
        </Container>
    );
}

export default Uploader;