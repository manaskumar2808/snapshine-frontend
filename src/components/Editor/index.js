import { Container } from './styles';

const Editor = ({ tool }) => { 
    const EditorComponent = tool ? tool.EditorComponent : null;

    return tool ? (
        <Container>
            <EditorComponent />
        </Container>
    ) : null;
}

export default Editor;