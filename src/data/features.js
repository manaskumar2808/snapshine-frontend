import CropWorkComponent from "@/components/CropWorkComponent";
import { FeatureOptions, FeatureType } from "@/types/FeatureType";
import { FiCrop } from "react-icons/fi";

export const FeatureTitle = {
    CROP: 'Crop'
};

export const FeatureMap = {
    Crop: new FeatureType('f00', FeatureTitle.CROP, FiCrop, CropWorkComponent, new FeatureOptions(true, true)),
};

export const Features = Object.values(FeatureMap).map(feature => feature);