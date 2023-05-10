import { FeatureOptions } from '../types/FeatureOptions';

export const FeatureOptionsMap = {
    Crop : new FeatureOptions('fo00', true, true),
    Flip: new FeatureOptions('fo01', true, false),
    Rotate: new FeatureOptions('fo02', true, false),
    BasicAdjust: new FeatureOptions('fo03', false, false),
    Color: new FeatureOptions('fo04', false, false),
    Invert: new FeatureOptions('fo05', false, false),
    Scenes: new FeatureOptions('fo06', false, false),
    Classic: new FeatureOptions('fo07', false, false),
    Retro: new FeatureOptions('fo08', false, false),
    Grayscale: new FeatureOptions('fo09', false, false),
    Layout: new FeatureOptions('fo10', false, true),
}

export const FeatureOptionsList = Object.values(FeatureOptionsMap).map(featureOptions => featureOptions);