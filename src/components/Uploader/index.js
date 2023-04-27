import { Button } from '@/UI';
import { Container, UploadContainer, UploadText, Wrapper } from './styles';
import { FiPlus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setImage } from '@/store/actions/image';
import { useTheme } from 'styled-components';
import { useRef } from 'react';

const Uploader = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const inputRef = useRef();

    const uploadClickHandler = () => {
        inputRef.current.click();
    }

    const uploadHandler = (e) => { 
        const file = e.target.files[0];
        const src = URL.createObjectURL(file);
        const alt = file.name;
        const path = file.path;
        setImageHandler({
            src, alt, path, file
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