import { FeatureMap } from '../../data/features';
import CropWorkComponent from '../CropWorkComponent';

const WorkComponent = ({ id, ...props }) => {
    if (id === FeatureMap.Crop.id)
        return <CropWorkComponent {...props} />
    return null;
}

export default WorkComponent;