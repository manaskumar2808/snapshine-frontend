import { Container } from './styles';
import Icon from '../Icon';
import { Tools } from '@/data/tools';

const Toolbar = ({ activeTool, setTool }) => {
    const toolClickHandler = (tool) => { 
        if (activeTool && activeTool.id === tool.id)
            setTool(null);
        else
            setTool(tool);
    }

    return (
        <Container>
            {Tools.map((tool) => <Icon
                key={tool.id}
                id={tool.id}
                text={tool.text}
                active={activeTool && tool.id === activeTool.id}
                toolClickHandler={() => toolClickHandler(tool)}
            />)}
        </Container>
    );
}

export default Toolbar;