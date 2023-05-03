import { FeatureMap } from "@/data/features";
import { useSelector } from "react-redux";
import CropWrapper from "../CropWrapper";
import { Container } from './styles';
import FlipWrapper from "../FlipWrapper";
import RotateWrapper from "../RotateWrapper";

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