import { SET_DRAG } from "../actions/types";

const initialState = {
    drag: true,
}

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_DRAG:
            state = {
                ...state,
                drag: action.drag,
            }
            break;
        default:
            break;
    }
    return state;
}

export default reducer;