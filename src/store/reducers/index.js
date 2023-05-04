import ImageReducer from './image';
import FeatureReducer from './feature';
import CropReducer from './crop';
import ResizeReducer from './resize';
import DragReducer from './drag';
import ZoomReducer from './zoom';
import FlipReducer from './flip';
import RotateReducer from './rotate';
import BasicAdjustReducer from './basic-adjust';

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
};

export default reducerMap;