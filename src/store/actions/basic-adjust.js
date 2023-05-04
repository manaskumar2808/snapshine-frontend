import { BASIC_ADJUST_IMAGE, SET_BLUR, SET_BRIGHTNESS, SET_CONTRAST, SET_SATURATION, SET_SHARPNESS } from "./types";

export const setBrightness = (brightness) => { 
    return dispatch => {
        dispatch({
            type: SET_BRIGHTNESS,
            brightness,
        });
    }
}

export const setContrast = (contrast) => {
    return dispatch => {
        dispatch({
            type: SET_CONTRAST,
            contrast,
        });
    }
}

export const setSaturation = (saturation) => {
    return dispatch => {
        dispatch({
            type: SET_SATURATION,
            saturation,
        });
    }
}

export const setSharpness = (sharpness) => {
    return dispatch => {
        dispatch({
            type: SET_SHARPNESS,
            sharpness,
        });
    }
}

export const setBlur = (blur) => {
    return dispatch => {
        dispatch({
            type: SET_BLUR,
            blur,
        });
    }
}

export const basicAdjustImage = (active) => {
    return dispatch => {
        dispatch({
            type: BASIC_ADJUST_IMAGE,
            active,
        });
    }
}