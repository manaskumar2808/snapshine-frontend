import { CropOptionType } from '../types/CropOptionType';

export const CropOptionMap = {
    FreeForm: new CropOptionType('co00', 'Freeform', -2),
    Crop1x1: new CropOptionType('co01', '1 x 1', 1.0),
    Crop3x2: new CropOptionType('co02', '3 x 2', 3.0/2.0),
    Crop2x3: new CropOptionType('co03', '2 x 3', 2.0/3.0),
    Crop4x3: new CropOptionType('co04', '4 x 3', 4.0/3.0),
    Crop3x4: new CropOptionType('co05', '3 x 4', 3.0/4.0),
    Crop16x9: new CropOptionType('co06', '16 x 9', 16.0/9.0),
    Crop9x16: new CropOptionType('co07', '9 x 16', 9.0/16.0),
    OriginalRation: new CropOptionType('co08', 'Original Ratio', -1),
    // Circle: new CropOptionType('co09', 'Circle', 1.0, "circle")),
    // Triangle: new CropOptionType('co10', 'Triangle', 1.0, "triangle")),
    // Heart: new CropOptionType('co11', 'Heart', 1.0, "heart")),
};

export const CropOptions = Object.values(CropOptionMap).map(cropOption => cropOption);
