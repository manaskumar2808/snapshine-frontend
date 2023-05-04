import { FeatureOptions } from '../types/FeatureOptions';

export const FeatureOptionsMap = {
    Crop : new FeatureOptions('fo00', true, true),
    Flip: new FeatureOptions('fo01', true, false),
    Rotate: new FeatureOptions('fo02', true, false),
}

export const FeatureOptionsList = Object.values(FeatureOptionsMap).map(featureOptions => featureOptions);