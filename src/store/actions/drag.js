import { SET_DRAG } from './types';

export const setDrag = (drag) => {
    return dispatch => {
        dispatch({
            type: SET_DRAG,
            drag,
        });
    }
}