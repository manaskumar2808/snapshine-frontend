import { FeatureOptions } from '../types/FeatureOptions';

export const FeatureOptionsMap = {
    Crop : new FeatureOptions('fo00', true, true),
    Flip: new FeatureOptions('fo01', true, false),
    Rotate: new FeatureOptions('fo02', true, false),
    BasicAdjust: new FeatureOptions('fo03', false, false),
    Color: new FeatureOptions('fo04', false, false),
    Invert: new FeatureOptions('fo05', false, false),
    Scenes: new FeatureOptions('fo06', false, false),
}

export const FeatureOptionsList = Object.values(FeatureOptionsMap).map(featureOptions => featureOptions);