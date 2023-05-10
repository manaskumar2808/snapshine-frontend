import { LAYOUT_IMAGE, SET_LAYOUT, SET_LAYOUT_BORDER, SET_LAYOUT_COLOR, SET_LAYOUT_DIMENSION } from "./types"

export const setLayout = (layoutId) => {
    return dispatch => {
        dispatch({
            type: SET_LAYOUT,
            layoutId,
        })
    }
}

export const setLayoutDimension = (height, width) => {
    return dispatch => {
        dispatch({
            type: SET_LAYOUT_DIMENSION,
            height, width,
        })
    }
}

export const setLayoutBorder = (border) => {
    return dispatch => {
        dispatch({
            type: SET_LAYOUT_BORDER,
            border,
        })
    }
}

export const setLayoutColor = (color) => {
    return dispatch => {
        dispatch({
            type: SET_LAYOUT_COLOR,
            color,
        })
    }
}

export const layoutImage = (active) => {
    return dispatch => {
        dispatch({
            type: LAYOUT_IMAGE,
            active,
        });
    }
}