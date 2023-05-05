import { FiCrop, FiImage, FiRefreshCw, FiRepeat, FiSun } from 'react-icons/fi';
import { FeatureMap } from '../../data/features';
import { CropOptionMap } from '@/data/crop-options';
import { ToolMap } from '@/data/tools';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { TbColorFilter } from 'react-icons/tb';
import { IoInvertMode } from 'react-icons/io5';

const IconComponent = ({ id, ...props }) => { 
    switch (id) {
        case FeatureMap.Crop.id:
            return <FiCrop {...props} />
        case FeatureMap.Flip.id:
            return <FiRepeat {...props} />
        case FeatureMap.Rotate.id:
            return <FiRefreshCw {...props} />
        case FeatureMap.BasicAdjust.id:
            return <FiSun {...props} />
        case FeatureMap.Color.id:
            return <TbColorFilter {...props} />
        case FeatureMap.Invert.id:
            return <IoInvertMode {...props} />
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