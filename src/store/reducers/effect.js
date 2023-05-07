import { EFFECT_IMAGE, SET_EFFECT } from '../actions/types';

const initialState = {
    effectId: null,
    active: false,
}

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_EFFECT:
            state = {
                ...state,
                effectId: action.effectId,
            }
            break;
        case EFFECT_IMAGE:
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