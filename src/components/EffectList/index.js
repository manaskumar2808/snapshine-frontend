import EffectCard from '../EffectCard';
import { Container, Grid } from './styles';

const EffectList = ({ effects = [], activeEffectId, onEffectClick }) => {
    const length = effects.length;
    const cols = 3;
    const rows = length / cols + (length % cols !== 0);

    return (
        <Container>
            <Grid cols={cols} rows={rows}>
                {effects.map(({ id, title, effectPropertiesId }) => <EffectCard
                    key={id}
                    id={id}
                    title={title}
                    effectPropertiesId={effectPropertiesId}
                    onEffectClick={onEffectClick}
                    active={id === activeEffectId}
                />)}
            </Grid>
        </Container>
    );
}

export default EffectList;