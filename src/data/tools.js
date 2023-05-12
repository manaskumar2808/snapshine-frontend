import { ToolType } from "@/types/ToolType";
import { FeatureGroupMap } from "./feature-groups";

export const ToolTitle = {
    ADJUSTMENTS: 'Adjustments',
    EFFECTS: 'Effects',
    FRAMES: 'Frames',
}

export const ToolMap = {
    Adjustments: new ToolType('t00', ToolTitle.ADJUSTMENTS, [FeatureGroupMap.Size, FeatureGroupMap.BrightnessAndColor]),
    Effects: new ToolType('t01', ToolTitle.EFFECTS, [FeatureGroupMap.Filters]),
    Frames: new ToolType('t02', ToolTitle.FRAMES, [FeatureGroupMap.Layout, FeatureGroupMap.Frame]),
}

export const Tools = Object.values(ToolMap).map(tool => tool);