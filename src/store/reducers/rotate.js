import { ROTATE_IMAGE, SET_DEGREE } from "../actions/types";

const initialState = {
    degree: 0,
    active: false,
}

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_DEGREE:
            state = {
                ...state,
                degree: action.degree,
            }
            break;
        case ROTATE_IMAGE:
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