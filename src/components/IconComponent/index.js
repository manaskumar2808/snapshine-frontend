import { FiCrop, FiImage, FiRepeat } from 'react-icons/fi';
import { FeatureMap } from '../../data/features';
import { CropOptionMap } from '@/data/crop-options';
import { ToolMap } from '@/data/tools';
import { HiOutlineAdjustments } from 'react-icons/hi';

const IconComponent = ({ id, ...props }) => { 
    switch (id) {
        case FeatureMap.Crop.id:
            return <FiCrop {...props} />
        case FeatureMap.Flip.id:
            return <FiRepeat {...props} />
        case CropOptionMap.FreeForm.id:
            return <FiCrop {...props} />
        case CropOptionMap.OriginalRation.id:
            return <FiImage {...props} />
        case ToolMap.Adjustments.id:
            return <HiOutlineAdjustments {...props} />
        default:
            break;
    }
    return null;
}

export default IconComponent;