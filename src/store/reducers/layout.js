import { DEFAULT_LAYOUT_BORDER, DEFAULT_LAYOUT_COLOR } from "@/constants/Default";

const { SET_LAYOUT_DIMENSION, SET_LAYOUT_BORDER, SET_LAYOUT_COLOR, SET_LAYOUT, LAYOUT_IMAGE } = require("../actions/types")

const initialState = {
    layoutId: null,
    layoutParams: {
        height: 0,
        width: 0,
        color: DEFAULT_LAYOUT_COLOR,
        border: DEFAULT_LAYOUT_BORDER,
    },
    active: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LAYOUT:
            state = {
                ...state,
                layoutId: action.layoutId,
            }
            break;
        case SET_LAYOUT_DIMENSION:
            state = {
                ...state,
                layoutParams: {
                    ...state.layoutParams,
                    height: action.height,
                    width: action.width,
                }
            }
            break;
        case SET_LAYOUT_BORDER:
            state = {
                ...state,
                layoutParams: {
                    ...state.layoutParams,
                    border: action.border,
                }
            }
            break;
        case SET_LAYOUT_COLOR:
            state = {
                ...state,
                layoutParams: {
                    ...state.layoutParams,
                    color: action.color,
                }
            }
            break;
        case LAYOUT_IMAGE:
            if (action.active) {
                state = {
                    ...state,
                    active: true,
                }
            } else {
                state = {
                    ...state,
                    active: false,
                }
            }
            break;
        default:
            break;
    }
    return state;
}

export default reducer;