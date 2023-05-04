import { DEFAULT_BLUR, DEFAULT_BRIGHTNESS, DEFAULT_CONTRAST, DEFAULT_SATURATION, DEFAULT_SHARPNESS } from "@/constants/Default";
import { BASIC_ADJUST_IMAGE, SET_BLUR, SET_BRIGHTNESS, SET_CONTRAST, SET_SATURATION, SET_SHARPNESS } from "../actions/types";

const initialState = {
    brightness: DEFAULT_BRIGHTNESS,
    contrast: DEFAULT_CONTRAST,
    saturation: DEFAULT_SATURATION,
    sharpness: DEFAULT_SHARPNESS,
    blur: DEFAULT_BLUR,
    active: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BRIGHTNESS:
            state = {
                ...state,
                brightness: action.brightness,
            }
            break;
        case SET_CONTRAST:
            state = {
                ...state,
                contrast: action.contrast,
            }
            break;
        case SET_SATURATION:
            state = {
                ...state,
                saturation: action.saturation,
            }
            break;
        case SET_SHARPNESS:
            state = {
                ...state,
                sharpness: action.sharpness,
            }
            break;
        case SET_BLUR:
            state = {
                ...state,
                blur: action.blur,
            }
            break;
        case BASIC_ADJUST_IMAGE:
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