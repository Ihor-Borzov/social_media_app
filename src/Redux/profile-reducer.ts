import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
import { reset } from 'redux-form';

const ADD_NEW_POST = "ADD_NEW_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const REMOVE_POST = "REMOVE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
const FETCHING_USER_PICTURE = "FETCHING_USER_PICTURE"
const SET_GLOBAL_ERROR = "SET_GLOBAL_ERROR"


type PostsDataType = {
    id:number
    likes:number|null
    message:string|null
}

export type PhotosType ={
    small: null|string,
    large: null|string
  }
  
  export type ContactsType = {
    facebook: string,
      website: string,
      vk: string,
      twitter: string,
      instagram: string,
      youtube: string,
      github:string,
      mainLink:string
  }


export type UserProfileType = {
    lookingForAJob: boolean,
      lookingForAJobDescription: string,
      fullName:string,
      userId: number,
      contacts: ContactsType
      photos:PhotosType
    }

    


let initialState = {
    postsData: [
        { id: 0, likes: 10, message: "some message" },
        { id: 1, likes: 11, message: "momolongmo" },
        { id: 2, likes: 12, message: "some hurucasami" },
    ] as Array<PostsDataType>,


    userProfile: null as UserProfileType|null,
    status: "",
    isFetching: false,
    errorFlag: false,
}



type InitialStateType = typeof initialState


const profileReducer = (state:InitialStateType = initialState, action:any):InitialStateType => {

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
                userProfile: { ...state.userProfile, photos: action.photos } as UserProfileType
            }

        case FETCHING_USER_PICTURE:
            return {
                ...state,
                isFetching: action.fetch
            }

        case SET_GLOBAL_ERROR:
            return {
                ...state,
                errorFlag: !state.errorFlag
            }


        default: return state;
    }
}



type addNewPostCreatorType = {
type : typeof ADD_NEW_POST
text:string
}


export const addNewPostCreator = (text:string):addNewPostCreatorType => {
    return {
        type: ADD_NEW_POST,
        text
    }
}

type removePostType = {
    type : typeof REMOVE_POST
    id:number
    }

export const removePost = (id:number):removePostType => {
    return {
        type: REMOVE_POST,
        id
    }
}

type SetUserProfileType = {
    type : typeof SET_USER_PROFILE
    userProfile: UserProfileType
}

export const setUserProfile = (userProfile: UserProfileType):SetUserProfileType => {
    return {
        type: SET_USER_PROFILE,
        userProfile
    }
}



type SetStatusType ={
    type: typeof SET_STATUS
 status:string
}

export const setStatus = (status:string):SetStatusType => {
    return {
        type: SET_STATUS,
        status
    }
}


type SavePhotoSuccessType = {
    type:typeof SAVE_PHOTO_SUCCESS
    photos:PhotosType
}

export const savePhotoSuccess = (photos:PhotosType):SavePhotoSuccessType => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}



type IsFetchingACType = {
    type : typeof FETCHING_USER_PICTURE
    fetch:boolean
}

export const isFetchingAC = (fetch:boolean):IsFetchingACType => {
    return {
        type: FETCHING_USER_PICTURE,
        fetch
    }
}



type setGlobalErrorType ={
    type : typeof SET_GLOBAL_ERROR
}

export const setGlobalError = ():setGlobalErrorType => {
    return {
        type: SET_GLOBAL_ERROR
    }
}







/* thunk */

export const addPostAndCleanReduxForm = (text:string) => {
    return (dispatch:any) => {
        dispatch(addNewPostCreator(text));
        dispatch(reset("NewPost"));

    }
}


export const showGlobalError = () => {
    return (dispatch:any) => {
        dispatch(setGlobalError());
        setTimeout(() => {
            dispatch(setGlobalError())
        }, 3000)
    }
}

export const getUserProfile = (userId:number) => {
    return (
        (dispatch:any) => {
            dispatch(isFetchingAC(true))
            profileAPI.getUserProfile(userId).then((data) => {
                dispatch(setUserProfile(data));
                dispatch(isFetchingAC(false));
            })
        }
    )
}


export const getStatus = (userId:number) => {
    return (
        (dispatch:any) => {
            profileAPI.getStatus(userId).then((response) => {
                dispatch(setStatus(response.data));
            })
        }
    )
}


export const updateStatus = (status:string) => {
    return (
        async (dispatch:any) => {
            try {
                let response = await profileAPI.setStatus(status)
                if (response.data.resultCode === 0) { dispatch(setStatus(status)) }
            }

            catch (error) { alert(error) }
        }
    )
}


export const savePhoto = (file:any) => {
    return (async (dispatch:any) => {
        dispatch(isFetchingAC(true))
        let response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(isFetchingAC(false))
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
    )
}



export const saveProfile = (profileData:UserProfileType) => {
    return (async (dispatch:any, getState:any) => {
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