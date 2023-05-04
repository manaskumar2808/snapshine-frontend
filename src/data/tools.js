import { ToolType } from "@/types/ToolType";
import { FeatureGroupMap } from "./feature-groups";

export const ToolTitle = {
    ADJUSTMENTS: 'Adjustments',
}

export const ToolMap = {
    Adjustments: new ToolType('t00', ToolTitle.ADJUSTMENTS, [ FeatureGroupMap.Size, FeatureGroupMap.BrightnessAndColor ]),
}

export const Tools = Object.values(ToolMap).map(tool => tool);