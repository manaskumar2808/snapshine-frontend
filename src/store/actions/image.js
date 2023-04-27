import { IMAGE_UPLOAD_FAILURE, IMAGE_UPLOAD_SUCCESS } from "./types"

export const setImage = (image) => { 
    return dispatch => { 
        try {
            if (!image)
                throw new Error('Undefined image file!');
            dispatch(imageUploadSuccess(image));
        } catch (err) {
            dispatch(imageUploadFailure(err.message))
        }
    }        
}

const imageUploadSuccess = (image) => { 
    return {
        type: IMAGE_UPLOAD_SUCCESS,
        image
    }
}

const imageUploadFailure = (error) => { 
    return {
        type: IMAGE_UPLOAD_FAILURE,
        error
    }
}