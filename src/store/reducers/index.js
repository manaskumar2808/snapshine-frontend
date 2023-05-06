import ImageReducer from './image';
import FeatureReducer from './feature';
import CropReducer from './crop';
import ResizeReducer from './resize';
import DragReducer from './drag';
import ZoomReducer from './zoom';
import FlipReducer from './flip';
import RotateReducer from './rotate';
import BasicAdjustReducer from './basic-adjust';
import ColorReducer from './color';
import InvertReducer from './invert';
import SceneReducer from './scene';

const reducerMap = {
    img: ImageReducer,
    ftr: FeatureReducer,
    crp: CropReducer,
    rsz: ResizeReducer,
    drg: DragReducer,
    zum: ZoomReducer,
    flp: FlipReducer,
    rot: RotateReducer,
    bad: BasicAdjustReducer,
    clr: ColorReducer,
    ivt: InvertReducer,
    scn: SceneReducer,
};

export default reducerMap;