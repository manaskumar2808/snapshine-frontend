import { FeatureTitle } from "@/data/features";
import { useSelector } from "react-redux";
import CropWrapper from "../CropWrapper";
import { Container } from './styles';

const Wrapper = ({ children }) => { 
    const feature = useSelector(({ ftr }) => ftr.feature);
    
    if (feature) {
        if (feature.title == FeatureTitle.CROP) {
            return (
                <CropWrapper>
                    {children}
                </CropWrapper>
            );
        }
    }

    return (
        <Container>
            {children}
        </Container>
    );
}

export default Wrapper;