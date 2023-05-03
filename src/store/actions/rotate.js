import { ROTATE_IMAGE, SET_DEGREE } from "./types";

export const setDegree = (degree) => {
    return dispatch => { 
        dispatch({
            type: SET_DEGREE,
            degree,
        });
    }
}

export const rotateImage = (active) => { 
    return dispatch => {
        dispatch({
            type: ROTATE_IMAGE,
            active,
        })
    }
}