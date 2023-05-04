import { FeatureMap } from '../../../data/features';
import BasicAdjustWorkComponent from '../BasicAdjustWorkComponent';
import CropWorkComponent from '../CropWorkComponent';
import FlipWorkComponent from '../FlipWorkComponent';
import RotateWorkComponent from '../RotateWorkComponent';

const WorkComponent = ({ id, ...props }) => {
    switch (id) {
        case FeatureMap.Crop.id:
            return <CropWorkComponent {...props} />
        case FeatureMap.Flip.id:
            return <FlipWorkComponent {...props} />
        case FeatureMap.Rotate.id:
            return <RotateWorkComponent {...props} />
        case FeatureMap.BasicAdjust.id:
            return <BasicAdjustWorkComponent {...props} />
        default:
            break;
    }
    return null;
}

export default WorkComponent;