import { CLASSIC_IMAGE, SET_CLASSIC_EFFECT } from "../actions/types";

const initialState = {
    classicEffectId: null,
    active: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLASSIC_EFFECT:
            state = {
                ...state,
                classicEffectId: action.classicEffectId,
            }
            break;
        case CLASSIC_IMAGE:
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