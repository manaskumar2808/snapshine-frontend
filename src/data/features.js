import { FeatureType } from "@/types/FeatureType";
import { FeatureOptionsMap } from "./feature-options";

export const FeatureTitle = {
    CROP: 'Crop',
    FLIP: 'Flip',
    ROTATE: 'Rotate',
    BASIC_ADJUST: 'Basic Adjust',
    COLOR: 'Color',
    INVERT: 'Invert',
};

export const FeatureMap = {
    Crop: new FeatureType('f00', FeatureTitle.CROP, FeatureOptionsMap.Crop.id),
    Flip: new FeatureType('f01', FeatureTitle.FLIP, FeatureOptionsMap.Flip.id),
    Rotate: new FeatureType('f02', FeatureTitle.ROTATE, FeatureOptionsMap.Rotate.id),
    BasicAdjust: new FeatureType('f03', FeatureTitle.BASIC_ADJUST, FeatureOptionsMap.BasicAdjust.id),
    Color: new FeatureType('f04', FeatureTitle.COLOR, FeatureOptionsMap.Color.id),
    Invert: new FeatureType('f05', FeatureTitle.INVERT, FeatureOptionsMap.Invert.id),
};

export const Features = Object.values(FeatureMap).map(feature => feature);