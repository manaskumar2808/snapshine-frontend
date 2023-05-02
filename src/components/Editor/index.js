import EditorComponent from '../EditorComponent';
import { Container } from './styles';

const Editor = ({ tool }) => { 
    return tool ? (
        <Container>
            <EditorComponent id={tool.id} />
        </Container>
    ) : null;
}

export default Editor;