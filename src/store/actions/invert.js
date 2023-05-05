import { INVERT_IMAGE, SET_INVERT } from "./types"

export const setInvert = (invert) => {
    return dispatch => {
        dispatch({
            type: SET_INVERT,
            invert,
        });
    }
}

export const invertImage = (active) => {
    return dispatch => {
        dispatch({
            type: INVERT_IMAGE,
            active,
        });
    }
}