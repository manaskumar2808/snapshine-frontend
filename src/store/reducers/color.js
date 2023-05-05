const { SET_TEMPERATURE, SET_TINT, COLOR_IMAGE } = require("../actions/types")

const initialState = {
    temperature: 0,
    tint: 0,
    active: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEMPERATURE:
            state = {
                ...state,
                temperature: action.temperature,
            }
            break;
        case SET_TINT:
            state = {
                ...state,
                tint: action.tint,
            }
            break;
        
        case COLOR_IMAGE:
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