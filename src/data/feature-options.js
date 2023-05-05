import { FeatureOptions } from '../types/FeatureOptions';

export const FeatureOptionsMap = {
    Crop : new FeatureOptions('fo00', true, true),
    Flip: new FeatureOptions('fo01', true, false),
    Rotate: new FeatureOptions('fo02', true, false),
    BasicAdjust: new FeatureOptions('f03', false, false),
    Color: new FeatureOptions('f04', false, false),
    Invert: new FeatureOptions('f05', false, false),
}

export const FeatureOptionsList = Object.values(FeatureOptionsMap).map(featureOptions => featureOptions);