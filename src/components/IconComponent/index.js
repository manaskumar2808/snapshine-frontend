import { FiCrop, FiImage, FiRefreshCw, FiRepeat, FiSun } from 'react-icons/fi';
import { FeatureMap } from '../../data/features';
import { CropOptionMap } from '@/data/crop-options';
import { ToolMap } from '@/data/tools';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { TbColorFilter, TbFrame } from 'react-icons/tb';
import { IoInvertMode, IoFlask } from 'react-icons/io5';
import { BsAspectRatio, BsBorderAll } from 'react-icons/bs';
import ThemeComponent from '../ThemeComponent';
import { CLASSIC, GRAYSCALE, RETRO, SCENES } from '@/constants/Link';

const IconComponent = ({ id, ...props }) => { 
    const themeSize = 40;

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
        case FeatureMap.Scenes.id:
            return <ThemeComponent src={SCENES.SRC} alt={SCENES.ALT} size={themeSize} />
        case FeatureMap.Classic.id:
            return <ThemeComponent src={CLASSIC.SRC} alt={CLASSIC.ALT} size={themeSize} />
        case FeatureMap.Retro.id:
            return <ThemeComponent src={RETRO.SRC} alt={RETRO.ALT} size={themeSize} />
        case FeatureMap.Grayscale.id:
            return <ThemeComponent src={GRAYSCALE.SRC} alt={GRAYSCALE.ALT} size={themeSize} />
        case FeatureMap.Layout.id:
            return <BsAspectRatio {...props} />
        case FeatureMap.ClassicFrame.id:
            return <TbFrame {...props} />
        case CropOptionMap.FreeForm.id:
            return <FiCrop {...props} />
        case CropOptionMap.OriginalRation.id:
            return <FiImage {...props} />
        case ToolMap.Adjustments.id:
            return <HiOutlineAdjustments {...props} />
        case ToolMap.Effects.id:
            return <IoFlask {...props} />
        case ToolMap.Frames.id:
            return <TbFrame {...props} />
        default:
            break;
    }
    return null;
}

export default IconComponent;