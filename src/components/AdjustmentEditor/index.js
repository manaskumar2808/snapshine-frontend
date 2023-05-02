import { Container } from './styles';
import FeatureGroup from '../FeatureGroup';
import { FeatureGroupMap } from '@/data/feature-groups';

const AdjustmentEditor = () => { 
    const featureGroups = [
        FeatureGroupMap.Size
    ];

    return (
        <Container>
            {featureGroups.map(({ id, title, featureList }) => <FeatureGroup
                key={id}
                id={id}
                title={title}
                featureList={featureList}
            />)}
        </Container>
    );
}

export default AdjustmentEditor;