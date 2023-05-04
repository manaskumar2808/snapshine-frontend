const { SET_ACTIVE_CROP_OPTION, CROP_IMAGE, SET_CROP_PARAMS } = require("./types")

export const setCropOption = (cropOptionId) => {
    return dispatch => { 
        dispatch({
            type: SET_ACTIVE_CROP_OPTION,
            cropOptionId,
        });
    }
}

export const setCropParams = (cropParams) => { 
    return dispatch => { 
        dispatch({
            type: SET_CROP_PARAMS,
            cropParams
        });
    }
}

export const cropImage = (active) => { 
    return dispatch => { 
        dispatch({
            type: CROP_IMAGE,
            active
        });
    }
}