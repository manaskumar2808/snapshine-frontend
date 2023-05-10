import Navbar from '@/components/Navbar';
import { Column, Container, Row } from './styles';
import Toolbar from '@/components/Toolbar';
import Editor from '@/components/Editor';
import { useState } from 'react';
import Canvas from '@/components/Canvas';

const Layout = () => {
    const [tool, setTool] = useState(null); 

    return (
        <Container>
            <Column>
                <Navbar />
                <Row>
                    <Toolbar activeTool={tool} setTool={setTool} />
                    <div style={{ width: 5 }} />
                    <Editor id={tool ? tool.id : null} />
                    <Canvas />
                </Row>
            </Column>
        </Container>
    );
}

export default Layout;