import { CROP_IMAGE, SET_ACTIVE_CROP_OPTION, SET_CROP_PARAMS } from "../actions/types";

const { CropOptionMap } = require("@/data/crop-options");

const initialState = {
    cropOption: CropOptionMap.FreeForm,
    cropParams: {
        x: 0,
        y: 0,
        height: 0,
        width: 0,
        unit: 'px',
    },
    active: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_CROP_OPTION:
            state = {
                ...state,
                cropOption: action.cropOption,
            }
            break;
        case SET_CROP_PARAMS:
            state = {
                ...state,
                cropParams: action.cropParams,
            }
            break;
        case CROP_IMAGE:
            state = {
                ...state,
                active: action.active,
            }
            break;
        default:
            break; 
    }
    return state;
}

export default reducer;