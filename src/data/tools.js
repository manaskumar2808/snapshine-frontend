import { ToolType } from "@/types/ToolType";

export const ToolTitle = {
    ADJUSTMENTS: 'Adjustments',
}

export const ToolMap = {
    Adjustments: new ToolType('t00', ToolTitle.ADJUSTMENTS),
}

export const Tools = Object.values(ToolMap).map(tool => tool);