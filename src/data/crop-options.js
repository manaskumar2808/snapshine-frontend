import { CropOptionType } from '../types/CropOptionType';

export const updateCropWithAspectRatio = (crop, image, aspect, cropShape = "rectangle") => {
  let newCrop = { ...crop };
  if (cropShape !== 'rectangle') {
    if (cropShape === 'circle') {
      newCrop = {
        ...crop,
        aspect,
        width: Math.min(image.height, image.width),
        height: Math.min(image.height, image.width),
      }
    }
    return newCrop;
  }
  if (aspect > 1.0) {
    if (image.aspectRatio > aspect) {
      newCrop = {
        ...crop,
        height: image.height,
        width: aspect * image.height,
        aspect,
      };
    } else if (image.aspectRatio < aspect) {
      newCrop = {
        ...crop,
        width: image.width,
        height: image.width / aspect,
        aspect,
      }
    } else {
      newCrop = {
        ...crop,
        width: image.width,
        height: image.height,
        aspect,
      }
    }
  } else if (aspect < 1.0) {
    if (image.aspectRatio < aspect) {
      newCrop = {
        ...crop,
        width: image.width,
        height: image.width / aspect,
        aspect,
      }
    } else if (image.aspectRatio > aspect) {
      newCrop = {
        ...crop,
        height: image.height,
        width: aspect * image.height,
        aspect,
      };
    } else {
      newCrop = {
        ...crop,
        width: image.width,
        height: image.height,
        aspect,
      }
    }
  } else {
    newCrop = {
      ...crop,
      width: Math.min(image.height, image.width),
      height: Math.min(image.height, image.width),
      aspect,
    };
  }

  newCrop = { 
    ...newCrop,
    x: 0,
    y: 0,
  }

  return newCrop;
}

export const lockAspectRatio = (crop, prevCrop, image, cropOption) => {
  if (cropOption && cropOption.id === CropOptionMap.FreeForm.id) {
    return crop;
  }

  const MAX_HEIGHT = image.height - crop.y;
  const MAX_WIDTH = image.width - crop.x;

  const prevHeight = prevCrop.height;
  const prevWidth = prevCrop.width;
  const height = Math.min(MAX_HEIGHT, crop.height);
  const width = Math.min(MAX_WIDTH, crop.width);
  const aspect = prevCrop.aspect;

  if (width != prevWidth) {
    const newHeight = width / aspect;
    if (newHeight > MAX_HEIGHT) {
      return {
        ...crop,
        width: prevWidth,
        height: MAX_HEIGHT,
        aspect,
      }
    } else {
      return {
        ...crop,
        height: newHeight,
        aspect,
      }
    }
  } else {
    const newWidth = height * aspect;
    if (newWidth > MAX_WIDTH) {
      return {
        ...crop,
        height: prevHeight,
        width: MAX_WIDTH,
        aspect,
      }
    } else {
      return {
        ...crop,
        width: newWidth,
        aspect,
      }
    }
  }
}

export const CropOptionMap = {
    FreeForm: new CropOptionType('co00', 'Freeform', (crop, image) => (crop)),
    Crop1x1: new CropOptionType('co01', '1 x 1', (crop, image) => updateCropWithAspectRatio(crop, image, 1.0)),
    Crop3x2: new CropOptionType('co02', '3 x 2', (crop, image) => updateCropWithAspectRatio(crop, image, 3.0/2.0)),
    Crop2x3: new CropOptionType('co03', '2 x 3', (crop, image) => updateCropWithAspectRatio(crop, image, 2.0/3.0)),
    Crop4x3: new CropOptionType('co04', '4 x 3', (crop, image) => updateCropWithAspectRatio(crop, image, 4.0/3.0)),
    Crop3x4: new CropOptionType('co05', '3 x 4', (crop, image) => updateCropWithAspectRatio(crop, image, 3.0/4.0)),
    Crop16x9: new CropOptionType('co06', '16 x 9', (crop, image) => updateCropWithAspectRatio(crop, image, 16.0/9.0)),
    Crop9x16: new CropOptionType('co07', '9 x 16', (crop, image) => updateCropWithAspectRatio(crop, image, 9.0/16.0)),
    OriginalRation: new CropOptionType('co08', 'Original Ratio', (crop, image) => updateCropWithAspectRatio(crop, image, image.width / image.height)),
    // Circle: new CropOptionType('co09', 'Circle', (crop, image) => updateCropWithAspectRatio(crop, image, 1.0, "circle")),
    // Triangle: new CropOptionType('co10', 'Triangle', (crop, image) => updateCropWithAspectRatio(crop, image, 1.0, "triangle")),
    // Heart: new CropOptionType('co11', 'Heart', (crop, image) => updateCropWithAspectRatio(crop, image, 1.0, "heart")),
};

export const CropOptions = Object.values(CropOptionMap).map(cropOption => cropOption);
