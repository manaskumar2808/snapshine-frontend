import { FeatureGroupType } from "@/types/FeatureGroupType";
import { FeatureMap } from "./features";

export const FeatureGroupTitle = {
    SIZE: 'Size'
};

export const FeatureGroupMap = {
    Size: new FeatureGroupType('fg00', FeatureGroupTitle.SIZE, [ FeatureMap.Crop ])
};

export const FeatureGroups = Object.values(FeatureGroupMap).map(fg => fg);