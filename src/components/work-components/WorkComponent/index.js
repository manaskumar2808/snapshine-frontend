import { FeatureMap } from '../../../data/features';
import BasicAdjustWorkComponent from '../BasicAdjustWorkComponent';
import ColorWorkComponent from '../ColorWorkComponent';
import CropWorkComponent from '../CropWorkComponent';
import EffectWorkComponent from '../EffectWorkComponent';
import FlipWorkComponent from '../FlipWorkComponent';
import InvertWorkComponent from '../InvertWorkComponent';
import RotateWorkComponent from '../RotateWorkComponent';
import LayoutWorkComponent from '../LayoutWorkComponent';
import ClassicFrameWorkComponent from '../ClassicFrameWorkComponent';
import { Container } from './styles';

const WorkComponent = ({ id, ...props }) => {
    const getWorkComponent = () => { 
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
                return <EffectWorkComponent featureId={FeatureMap.Scenes.id} {...props} />
            case FeatureMap.Classic.id:
                return <EffectWorkComponent featureId={FeatureMap.Classic.id} {...props} />
            case FeatureMap.Retro.id:
                return <EffectWorkComponent featureId={FeatureMap.Retro.id} {...props} />
            case FeatureMap.Grayscale.id:
                return <EffectWorkComponent featureId={FeatureMap.Grayscale.id} {...props} />
            case FeatureMap.Layout.id:
                return <LayoutWorkComponent {...props} />
            case FeatureMap.ClassicFrame.id:
                return <ClassicFrameWorkComponent {...props} />
            default:
                break;
        }
        return null;
    }

    return (
        <Container>
            {getWorkComponent()}
        </Container>
    );
}

export default WorkComponent;