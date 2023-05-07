import { FeatureMap } from "@/data/features";
import { useSelector } from "react-redux";
import CropWrapper from "../CropWrapper";
import { Container } from './styles';
import FlipWrapper from "../FlipWrapper";
import RotateWrapper from "../RotateWrapper";
import BasicAdjustWrapper from "../BasicAdjustWrapper";
import ColorWrapper from "../ColorWrapper";
import InvertWrapper from "../InvertWrapper";
import EffectWrapper from "../EffectWrapper";

const Wrapper = ({ children }) => { 
    const feature = useSelector(({ ftr }) => ftr.feature);

    if (!feature)
        return <Container>{children}</Container>
    
    switch (feature.id) {
        case FeatureMap.Crop.id:
            return (
                <CropWrapper>
                    {children}
                </CropWrapper>
            );
        case FeatureMap.Flip.id:
            return (
                <FlipWrapper>
                    {children}
                </FlipWrapper>
            );
        case FeatureMap.Rotate.id:
            return (
                <RotateWrapper>
                    {children}
                </RotateWrapper>
            );
        case FeatureMap.BasicAdjust.id:
            return (
                <BasicAdjustWrapper>
                    {children}
                </BasicAdjustWrapper>
            );
        case FeatureMap.Color.id:
            return (
                <ColorWrapper>
                    {children}
                </ColorWrapper>
            );
        case FeatureMap.Invert.id:
            return (
                <InvertWrapper>
                    {children}
                </InvertWrapper>
            );
        case FeatureMap.Scenes.id:
            return (
                <EffectWrapper>
                    {children}
                </EffectWrapper>
            );
        case FeatureMap.Classic.id:
            return (
                <EffectWrapper>
                    {children}
                </EffectWrapper>
            );
        case FeatureMap.Retro.id:
            return (
                <EffectWrapper>
                    {children}
                </EffectWrapper>
            );
        case FeatureMap.Grayscale.id:
            return (
                <EffectWrapper>
                    {children}
                </EffectWrapper>
            );
        default:
            break;
    }

    return (
        <Container>
            {children}
        </Container>
    );
}

export default Wrapper;