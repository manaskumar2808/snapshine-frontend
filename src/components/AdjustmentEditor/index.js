import { Container } from './styles';
import { FeatureGroupType } from '@/types/FeatureGroupType';
import { FeatureType } from '@/types/FeatureType';
import { FiCrop } from 'react-icons/fi';
import FeatureGroup from '../FeatureGroup';

const AdjustmentEditor = () => { 
    const featureGroups = [
        new FeatureGroupType('fg00', 'Size', [ new FeatureType('f00', 'Crop', FiCrop) ])
    ];

    return (
        <Container>
            {featureGroups.map(({ id, title, featureList }) => <FeatureGroup
                key={id}
                title={title}
                featureList={featureList}
            />)}
        </Container>
    );
}

export default AdjustmentEditor;