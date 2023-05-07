import { SET_EFFECT, EFFECT_IMAGE } from "./types"

export const setEffect = (effectId) => {
    return dispatch => { 
        dispatch({
            type: SET_EFFECT,
            effectId,
        })
    }
}

export const effectImage = (active) => {
    return dispatch => {
        dispatch({
            type: EFFECT_IMAGE,
            active,
        })
    }
}