import { Container } from './styles';
import { FeatureGroupType } from '@/types/FeatureGroupType';
import { FeatureType } from '@/types/FeatureType';
import { FiCrop } from 'react-icons/fi';
import FeatureGroup from '../FeatureGroup';
import CropWorkComponent from '../CropWorkComponent';
import CropWrapper from '../CropWrapper';
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