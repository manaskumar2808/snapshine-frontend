import { SET_ZOOM } from "./types";

export const setZoom = (zoom) => {
    return dispatch => {
        dispatch({
            type: SET_ZOOM,
            zoom,
        })
    }
}