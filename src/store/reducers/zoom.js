import { SET_ZOOM } from "../actions/types";

const initialState = {
    zoom: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ZOOM:
            state = {
                ...state,
                zoom: action.zoom,
            }
            break;
        default:
            break;
    }
    return state;
}

export default reducer;