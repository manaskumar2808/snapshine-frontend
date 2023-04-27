import { Container } from './styles';
import { HiOutlineAdjustments } from 'react-icons/hi';
import Icon from '../Icon';
import { ToolType } from '@/types/ToolType';
import AdjustmentEditor from '../AdjustmentEditor';

const Toolbar = ({ activeTool, setTool }) => {
    const tools = [
        new ToolType('t00', 'Adjustments', HiOutlineAdjustments, AdjustmentEditor)
    ];

    const toolClickHandler = (tool) => { 
        if (activeTool && activeTool.id === tool.id)
            setTool(null);
        else
            setTool(tool);
    }

    return (
        <Container>
            {tools.map((tool) => <Icon
                key={tool.id}
                text={tool.text}
                active={activeTool && tool.id === activeTool.id}
                IconComponent={tool.IconComponent}
                toolClickHandler={() => toolClickHandler(tool)}
            />)}
        </Container>
    );
}

export default Toolbar;