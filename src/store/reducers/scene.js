import { SCENE_IMAGE, SET_SCENE_EFFECT } from "../actions/types";

const initialState = {
    sceneEffectId: null,
    active: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCENE_EFFECT:
            state = {
                ...state,
                sceneEffectId: action.sceneEffectId,
            }
            break;
        case SCENE_IMAGE:
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