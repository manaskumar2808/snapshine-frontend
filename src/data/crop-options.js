import { FiCircle, FiCrop, FiHeart, FiImage, FiTriangle } from "react-icons/fi";
import { CropOptionType } from '../types/CropOptionType';

const updateCropWithAspectRatio = (crop, image, aspectRatio, cropShape = "rectangle") => {
  let newCrop = { ...crop };
  if (cropShape !== 'rectangle')
    return newCrop;
  if (aspectRatio > 1.0) {
    if (image.aspectRatio > aspectRatio) {
      newCrop = {
        ...crop,
        height: image.height,
        // width: aspectRatio * image.height,
        aspectRatio,
      };
    } else if (image.aspectRatio < aspectRatio) {
      newCrop = {
        ...crop,
        width: image.width,
        // height: image.width / aspectRatio,
        aspectRatio,
      }
    } else {
      newCrop = {
        ...crop,
        width: image.width,
        // height: image.height,
        aspectRatio,
      }
    }
  } else if (aspectRatio < 1.0) {
    if (image.aspectRatio < aspectRatio) {
      newCrop = {
        ...crop,
        width: image.width,
        // height: image.width / aspectRatio,
        aspectRatio,
      }
    } else if (image.aspectRatio > aspectRatio) {
      newCrop = {
        ...crop,
        height: image.height,
        // width: aspectRatio * image.height,
        aspectRatio,
      };
    } else {
      newCrop = {
        ...crop,
        width: image.width,
        // height: image.height,
        aspectRatio,
      }
    }
  } else {
    newCrop = {
      ...crop,
      width: Math.min(image.height, image.width),
      // height: Math.min(image.height, image.width),
      aspectRatio,
    };
  }
  return newCrop;
}

export const CropOptionMap = {
    FreeForm: new CropOptionType('co00', 'Freeform', FiCrop, (crop, image) => (crop)),
    Crop1x1: new CropOptionType('co01', '1 x 1', null, (crop, image) => updateCropWithAspectRatio(crop, image, 1.0)),
    Crop3x2: new CropOptionType('co02', '3 x 2', null, (crop, image) => updateCropWithAspectRatio(crop, image, 3.0/2.0)),
    Crop2x3: new CropOptionType('co03', '2 x 3', null, (crop, image) => updateCropWithAspectRatio(crop, image, 2.0/3.0)),
    Crop4x3: new CropOptionType('co04', '4 x 3', null, (crop, image) => updateCropWithAspectRatio(crop, image, 4.0/3.0)),
    Crop3x4: new CropOptionType('co05', '3 x 4', null, (crop, image) => updateCropWithAspectRatio(crop, image, 3.0/4.0)),
    Crop16x9: new CropOptionType('co06', '16 x 9', null, (crop, image) => updateCropWithAspectRatio(crop, image, 16.0/9.0)),
    Crop9x16: new CropOptionType('co07', '9 x 16', null, (crop, image) => updateCropWithAspectRatio(crop, image, 9.0/16.0)),
    OriginalRation: new CropOptionType('co08', 'Original Ratio', FiImage, (crop, image) => updateCropWithAspectRatio(crop, image, image.width / image.height)),
    Circle: new CropOptionType('co09', 'Circle', FiCircle, (crop, image) => updateCropWithAspectRatio(crop, image, 1.0, "circle")),
    Triangle: new CropOptionType('co10', 'Triangle', FiTriangle, (crop, image) => updateCropWithAspectRatio(crop, image, 1.0, "triangle")),
    Heart: new CropOptionType('co11', 'Heart', FiHeart, (crop, image) => updateCropWithAspectRatio(crop, image, 1.0, "heart")),
};

export const CropOptions = Object.values(CropOptionMap).map(cropOption => cropOption);
