import { FeatureOptions, FeatureType } from "@/types/FeatureType";

export const FeatureTitle = {
    CROP: 'Crop'
};

export const FeatureMap = {
    Crop: new FeatureType('f00', FeatureTitle.CROP, new FeatureOptions(true, true)),
};

export const Features = Object.values(FeatureMap).map(feature => feature);