import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_NEW_POST = "ADD_NEW_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const REMOVE_POST = "REMOVE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
const FETCHING_USER_PICTURE = "FETCHING_USER_PICTURE"
const SET_GLOBAL_ERROR = "SET_GLOBAL_ERROR"




/*#6 create an object to assign launch characteristics for the main state.  this is the way we set up our state when we first time start the app */
let initialState = {
    postsData: [
        { id: 0, likes: "10", message: "some message" },
        { id: 1, likes: "12", message: "momolongmo" },
        { id: 2, likes: "11", message: "some hurucasami" },
    ],


    userProfile: null,
    status: "",
    isFetching: false,
    errorFlag:false,
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_NEW_POST:
            return { ...state, postsData: [...state.postsData, { id: state.postsData.length, likes: 5, message: action.text }] };

        case REMOVE_POST:
            return {
                ...state, postsData: state.postsData.filter(p => p.id !== action.id)
            }

        case SET_USER_PROFILE:
            return { ...state, userProfile: action.userProfile }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                userProfile: { ...state.userProfile, photos: action.photos }
            }

        case FETCHING_USER_PICTURE:
            return {
                ...state,
                isFetching: action.fetch
            }

        case SET_GLOBAL_ERROR:
            return {
                ...state,
                errorFlag:!state.errorFlag
            }

        default: return state;
    }
}





export const addNewPostCreator = (text) => {
    return {
        type: ADD_NEW_POST,
        text
    }
}

export const removePost = (id) => {
    return {
        type: REMOVE_POST,
        id
    }
}

export const setUserProfile = (userProfile) => {
    return {
        type: SET_USER_PROFILE,
        userProfile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}


export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}


export const isFetchingAC = (fetch) => {
    return {
        type: FETCHING_USER_PICTURE,
        fetch
    }
}


export const setGlobalError = ()=>{
    return{
        type:SET_GLOBAL_ERROR
    }
}







/* thunk */


export const showGlobalError = ()=>{
    return (dispatch)=>{
        dispatch(setGlobalError());
        setTimeout(()=>{
            dispatch(setGlobalError())
        },3000)
    }
}

export const getUserProfile = (userId) => {
    return (
        (dispatch) => {
            dispatch(isFetchingAC(true))
            profileAPI.getUserProfile(userId).then((data) => {
                dispatch(setUserProfile(data));
                dispatch(isFetchingAC(false));
            })
        }
    )
}


export const getStatus = (userId) => {
    console.log("get status")
    return (
        (dispatch) => {
            profileAPI.getStatus(userId).then((response) => {
                dispatch(setStatus(response.data));
            })
        }
    )
}


export const updateStatus = (status) => {
    return (
       async (dispatch) => {
        try{
            let response = await profileAPI.setStatus(status)
                if (response.data.resultCode === 0) { dispatch(setStatus(status)) }
        }
         
catch(error){alert(error)}
        }
    )
}


export const savePhoto = (file) => {
    return (async (dispatch) => {
        dispatch(isFetchingAC(true))
        let response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(isFetchingAC(false))
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
    )
}



export const saveProfile = (profileData) => {
    return (async (dispatch, getState) => {
        let userId = getState().auth.id                                  //! this is the way to get state from another reducer

        let response = await profileAPI.saveProfile(profileData);
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId))                                //! this is the way to call a thunk from a thunk in the same reducer
        }
        else {
            dispatch(stopSubmit("profileDataA", { _error: response.data.messages[0] }));
            return (Promise.reject(response.data.messages[0]))
        }
    }
    )
}


export default profileReducer;