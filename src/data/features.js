import { FeatureOptions, FeatureType } from "@/types/FeatureType";

export const FeatureTitle = {
    CROP: 'Crop',
    FLIP: 'Flip',
    ROTATE: 'Rotate',
};

export const FeatureMap = {
    Crop: new FeatureType('f00', FeatureTitle.CROP, new FeatureOptions(true, true)),
    Flip: new FeatureType('f01', FeatureTitle.FLIP, new FeatureOptions(true, false)),
    Rotate: new FeatureType('f02', FeatureTitle.ROTATE, new FeatureOptions(true, false)),
};

export const Features = Object.values(FeatureMap).map(feature => feature);