import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "@/constants/Default";

export const getLayoutDimensions = (image, aspect) => {
    if (!image)
        return null;
    
    const { height, width, aspectRatio } = image;
    const { min } = Math;
    
    let layoutWidth = width;
    let layoutHeight = height;

    if (aspectRatio > aspect) {
        layoutWidth = width;
        layoutHeight = layoutWidth / aspect;
    } else {
        layoutHeight = height;
        layoutWidth = aspect * layoutHeight;
    }

    if (layoutWidth > layoutHeight) {
        layoutWidth = min(DEFAULT_WIDTH, layoutWidth);
        layoutHeight = layoutWidth / aspect;
    } else {
        layoutHeight = min(DEFAULT_HEIGHT, layoutHeight);
        layoutWidth = aspect * layoutHeight;
    }
    
    return { layoutWidth, layoutHeight };
}