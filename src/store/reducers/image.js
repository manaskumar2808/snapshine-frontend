import { IMAGE_UPLOAD_FAILURE, IMAGE_UPLOAD_SUCCESS } from "../actions/types";

const initialState = {
    image: null,
    error: null
}

const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case IMAGE_UPLOAD_SUCCESS:
            state = {
                ...state,
                image: action.image,
                error: null
            }
            break;
        case IMAGE_UPLOAD_FAILURE:
            state = {
                ...state,
                error: action.error
            }
            break;
        default:
            break;
    }
    return state;
}

export default reducer;