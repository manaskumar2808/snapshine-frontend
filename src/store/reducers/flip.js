import { FLIP_IMAGE, SET_FLIP } from "../actions/types";

const initialState = {
    flipX: false,
    flipY: false,
    active: false,
}

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_FLIP:
            state = {
                ...state,
                flipX: action.flipX,
                flipY: action.flipY,
            }
            break;
        case FLIP_IMAGE:
            if (action.active) {
                state = {
                    ...state,
                    active: true,
                }
            } else {
                state = {
                    ...state,
                    flipX: false,
                    flipY: false,
                    active: false,
                }
            }
            break;
        default:
            break;
    }
    return state;
}

export default reducer;