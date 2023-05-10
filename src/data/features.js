import { FeatureType } from "@/types/FeatureType";
import { FeatureOptionsMap } from "./feature-options";

export const FeatureTitle = {
    CROP: 'Crop',
    FLIP: 'Flip',
    ROTATE: 'Rotate',
    BASIC_ADJUST: 'Basic Adjust',
    COLOR: 'Color',
    INVERT: 'Invert',
    SCENES: 'Scenes',
    CLASSIC: 'Classic',
    RETRO: 'Retro',
    GRAYSCALE: 'Grayscale',
    LAYOUT: 'Layout',
};

export const FeatureMap = {
    Crop: new FeatureType('f00', FeatureTitle.CROP, FeatureOptionsMap.Crop.id),
    Flip: new FeatureType('f01', FeatureTitle.FLIP, FeatureOptionsMap.Flip.id),
    Rotate: new FeatureType('f02', FeatureTitle.ROTATE, FeatureOptionsMap.Rotate.id),
    BasicAdjust: new FeatureType('f03', FeatureTitle.BASIC_ADJUST, FeatureOptionsMap.BasicAdjust.id),
    Color: new FeatureType('f04', FeatureTitle.COLOR, FeatureOptionsMap.Color.id),
    Invert: new FeatureType('f05', FeatureTitle.INVERT, FeatureOptionsMap.Invert.id),
    Scenes: new FeatureType('f06', FeatureTitle.SCENES, FeatureOptionsMap.Scenes.id),
    Classic: new FeatureType('f07', FeatureTitle.CLASSIC, FeatureOptionsMap.Classic.id),
    Retro: new FeatureType('f08', FeatureTitle.RETRO, FeatureOptionsMap.Retro.id),
    Grayscale: new FeatureType('f09', FeatureTitle.GRAYSCALE, FeatureOptionsMap.Grayscale.id),
    Layout: new FeatureType('f10', FeatureTitle.LAYOUT, FeatureOptionsMap.Layout.id),
};

export const Features = Object.values(FeatureMap).map(feature => feature);