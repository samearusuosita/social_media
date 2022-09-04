// uploading image

import * as UploadApi from '../api/uploadResquest';

export const UploadImage = (data) => async(dispatch) =>{
     try {
        await UploadApi.UploadImage(data) 
     } catch (error) {
        console.log(error)
     }
};

export const uploadPost = (data) => async(dispatch) =>{
    dispatch({type: "UPLOAD_START"})
    try {
        const newPost = await UploadApi.uploadPost(data)
        // dispatch reducer
        dispatch({type: "UPLOAD_SUCCESS", data: newPost.data})
    } catch (error) {
        console.log(error)
        dispatch({type: "UPLOAD_FAIL"})
    }
};