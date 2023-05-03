import { FLIP_IMAGE, SET_FLIP } from "./types";

export const setFlip = (flipX, flipY) => {
    return dispatch => {
        dispatch({
            type: SET_FLIP,
            flipX, flipY
        });
    }
}

export const flipImage = (active) => { 
    return dispatch => { 
        dispatch({
            type: FLIP_IMAGE,
            active
        });
    }
}