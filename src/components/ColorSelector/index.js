import { Colors } from '@/data/colors';
import { Container, ColorItem, ColorGrid } from './styles';

const ColorSelector = ({ color, setColor }) => {
    const length = Colors.length;
    const cols = 4;
    const rows = length / cols + (length % cols !== 0);

    return (
        <Container>
            <ColorGrid cols={cols} rows={rows}>
                {Colors.map(({ id, value }) => (
                    <ColorItem
                        key={id}
                        color={value}
                        active={color === value}
                        onClick={() => setColor(value)}
                    />
                ))}
            </ColorGrid>
        </Container>
    );
}

export default ColorSelector;