import ImageReducer from './image';
import FeatureReducer from './feature';
import CropReducer from './crop';
import ResizeReducer from './resize';
import DragReducer from './drag';
import ZoomReducer from './zoom';

const reducerMap = {
    img: ImageReducer,
    ftr: FeatureReducer,
    crp: CropReducer,
    rsz: ResizeReducer,
    drg: DragReducer,
    zum: ZoomReducer,
};

export default reducerMap;