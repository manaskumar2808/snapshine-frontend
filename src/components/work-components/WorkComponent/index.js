import { FeatureMap } from '../../../data/features';
import BasicAdjustWorkComponent from '../BasicAdjustWorkComponent';
import ColorWorkComponent from '../ColorWorkComponent';
import CropWorkComponent from '../CropWorkComponent';
import FlipWorkComponent from '../FlipWorkComponent';
import InvertWorkComponent from '../InvertWorkComponent';
import RotateWorkComponent from '../RotateWorkComponent';
import SceneWorkComponent from '../SceneWorkComponent';

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
        case FeatureMap.Color.id:
            return <ColorWorkComponent {...props} />
        case FeatureMap.Invert.id:
            return <InvertWorkComponent {...props} />
        case FeatureMap.Scenes.id:
            return <SceneWorkComponent {...props} />
        default:
            break;
    }
    return null;
}

export default WorkComponent;