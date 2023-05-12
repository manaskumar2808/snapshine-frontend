import { FrameMap } from "@/data/frames";
import { FRAME_IMAGE, SET_FRAME, SET_FRAME_COLOR, SET_FRAME_SIZE } from "../actions/types";

const { DEFAULT_FRAME_COLOR, DEFAULT_FRAME_SIZE } = require("@/constants/Default");

const initialState = {
    frameId: FrameMap.Solid.id,
    frameParams: {
        size: DEFAULT_FRAME_SIZE,
        color: DEFAULT_FRAME_COLOR,
    },
    active: false,
};

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_FRAME:
            state = {
                ...state,
                frameId: action.frameId,
            }
            break;
        case SET_FRAME_SIZE:
            state = {
                ...state,
                frameParams: {
                    ...state.frameParams,
                    size: action.size,
                }
            }
            break;
        case SET_FRAME_COLOR:
            state = {
                ...state,
                frameParams: {
                    ...state.frameParams,
                    color: action.color,
                }
            }
            break;
        case FRAME_IMAGE:
            if (action.active) {
                state = {
                    ...state,
                    active: true,
                }
            } else {
                state = initialState;
            }
            break;
        default:
            break;
    }
    return state;
}

export default reducer;