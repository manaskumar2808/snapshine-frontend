import { INVERT_IMAGE, SET_INVERT } from "../actions/types";


const initialState = {
    invert: false,
    active: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INVERT:
            state = {
                ...state,
                invert: action.invert,
            }
            break;
        case INVERT_IMAGE:
            state = {
                ...state,
                active: action.active,
            }
            break;
        default:
            break;
    }
    return state;
}

export default reducer;