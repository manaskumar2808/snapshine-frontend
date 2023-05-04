import { FeatureGroupType } from "@/types/FeatureGroupType";
import { FeatureMap } from "./features";

export const FeatureGroupTitle = {
    SIZE: 'Size',
    BRIGHTNESS_AND_COLOR: 'Brightness & Color',
};

export const FeatureGroupMap = {
    Size: new FeatureGroupType('fg00', FeatureGroupTitle.SIZE, [FeatureMap.Crop, FeatureMap.Flip, FeatureMap.Rotate]),
    BrightnessAndColor: new FeatureGroupType('fg01', FeatureGroupTitle.BRIGHTNESS_AND_COLOR, [ FeatureMap.BasicAdjust ]),
};

export const FeatureGroups = Object.values(FeatureGroupMap).map(fg => fg);