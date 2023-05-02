import { SET_ACTIVE_FEATURE } from "./types";

export const setActiveFeature = (feature) => { 
    return dispatch => { 
        dispatch({
            type: SET_ACTIVE_FEATURE,
            feature
        });       
    }
}