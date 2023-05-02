import { SET_RESIZE } from "../actions/types";

const initialState = {
    resize: true,
}

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_RESIZE:
            state = {
                ...state,
                resize: action.resize,
            }
            break;
        default:
            break;
    }
    return state;
}

export default reducer;