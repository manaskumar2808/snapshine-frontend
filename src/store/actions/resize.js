import { SET_RESIZE } from './types';

export const setResize = (resize) => {
    return dispatch => {
        dispatch({
            type: SET_RESIZE,
            resize
        });
    }
}