import { COLOR_IMAGE, SET_TEMPERATURE, SET_TINT } from "./types"


export const setTemperature = (temperature) => {
    return dispatch => {
        dispatch({
            type: SET_TEMPERATURE,
            temperature,
        });
    }
}

export const setTint = (tint) => {
    return dispatch => {
        dispatch({
            type: SET_TINT,
            tint,
        });
    }
}

export const colorImage = (active) => {
    return dispatch => {
        dispatch({
            type: COLOR_IMAGE,
            active,
        });
    }
}