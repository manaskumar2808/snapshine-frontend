import { SCENE_IMAGE, SET_SCENE_EFFECT } from "./types";

export const setSceneEffect = (sceneEffectId) => {
    return dispatch => {
        dispatch({
            type: SET_SCENE_EFFECT,
            sceneEffectId,
        });
    }
}

export const sceneImage = (active) => {
    return dispatch => {
        dispatch({
            type: SCENE_IMAGE,
            active,
        })
    }
}