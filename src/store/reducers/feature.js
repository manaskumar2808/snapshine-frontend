import { SET_ACTIVE_FEATURE } from "../actions/types";

const initialState = {
    feature: null
}

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_ACTIVE_FEATURE:
            state = {
                ...state,
                feature: action.feature
            }
            break;
        default:
            break;
    }
    return state;
}

export default reducer;