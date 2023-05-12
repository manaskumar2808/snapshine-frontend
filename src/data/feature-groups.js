import { FeatureGroupType } from "@/types/FeatureGroupType";
import { FeatureMap } from "./features";

export const FeatureGroupTitle = {
    SIZE: 'Size',
    BRIGHTNESS_AND_COLOR: 'Brightness & Color',
    FILTERS: 'Filters',
    LAYOUT: 'Layout',
    FRAME: 'Frame',
};

export const FeatureGroupMap = {
    Size: new FeatureGroupType('fg00', FeatureGroupTitle.SIZE, [FeatureMap.Crop, FeatureMap.Flip, FeatureMap.Rotate]),
    BrightnessAndColor: new FeatureGroupType('fg01', FeatureGroupTitle.BRIGHTNESS_AND_COLOR, [FeatureMap.BasicAdjust, FeatureMap.Color, FeatureMap.Invert]),
    Filters: new FeatureGroupType('fg02', FeatureGroupTitle.FILTERS, [FeatureMap.Scenes, FeatureMap.Classic, FeatureMap.Retro, FeatureMap.Grayscale]),
    Layout: new FeatureGroupType('fg03', FeatureGroupTitle.LAYOUT, [FeatureMap.Layout]),
    Frame: new FeatureGroupType('fg04', FeatureGroupTitle.FRAME, [FeatureMap.ClassicFrame])
};

export const FeatureGroups = Object.values(FeatureGroupMap).map(fg => fg);