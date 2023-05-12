import { FRAME_IMAGE, SET_FRAME, SET_FRAME_COLOR, SET_FRAME_SIZE } from "./types";

export const setFrame = (frameId) => { 
    return dispatch => {
        dispatch({
            type: SET_FRAME,
            frameId,
        });
    }
}

export const setFrameSize = (size) => {
    return dispatch => { 
        dispatch({
            type: SET_FRAME_SIZE,
            size,
        });
    }
}

export const setFrameColor = (color) => {
    return dispatch => {
        dispatch({
            type: SET_FRAME_COLOR,
            color,
        });
    }
}

export const frameImage = (active) => { 
    return dispatch => { 
        dispatch({
            type: FRAME_IMAGE,
            active,
        });
    }
}