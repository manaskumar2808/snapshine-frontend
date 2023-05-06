import { CLASSIC_IMAGE, SET_CLASSIC_EFFECT } from "./types";

export const setClassicEffect = (classicEffectId) => {
    return dispatch => {
        dispatch({
            type: SET_CLASSIC_EFFECT,
            classicEffectId,
        });
    }
}

export const classicImage = (active) => {
    return dispatch => {
        dispatch({
            type: CLASSIC_IMAGE,
            active,
        });
    }
}