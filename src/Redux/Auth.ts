import { stopSubmit } from "redux-form"
import { authenticationAPI } from "../api/api"

const SET_USERS_DATA = 'SET_USERS_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'Auth/GET_CAPTCHA_URL_SUCCESS'

type InitialStateTrial = {
    id: number|null,
    login: string|null,
    email: string|null,
    password: string|null,
    rememberMe: boolean,
    isAuth: boolean,
    captchaUrl: string|null,  
}


let initialState = {
    id: null as number|null,
    login: null as string|null,
    email: null as string|null,
    password: null as string|null,
    rememberMe: false,
    isAuth: false,
    captchaUrl: null as string|null      //if null then the captcha is nor required
}

export type InitialStateType  = typeof initialState

const authReducer = (state:InitialStateType = initialState, action:any):InitialStateType => {
    switch (action.type) {
       
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
            }
        
        

        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

       
        

        default: return state
    }

}




type DataType = {
    id:number|null
        email:string|null
        login:string |null
        isAuth:boolean
    }

type authorizationACType = {
    type:typeof SET_USERS_DATA
    data:DataType
}
export let authorizationAC = (id:number|null, email:string|null, login:string|null, isAuth:boolean):authorizationACType =>
 { return ({ type: SET_USERS_DATA, data: { id, email, login, isAuth } }) }


type getCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload:{captchaUrl:string}
}

export let getCaptchaUrlSuccess = (captchaUrl:string):getCaptchaUrlSuccessType => { return ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } }) }






/* thunk */

export const authenticate = () => {
    return (
        (dispatch:any) => {
            return (
                authenticationAPI.authenticate().then((response) => {
                    if (response.resultCode === 0) {
                        let { id, email, login } = response.data;
                        dispatch(authorizationAC(id, email, login, true))  /* if response code ===0 it means we entered and we can send our isAuth to true */
                    }
                    else { dispatch(authorizationAC(null, null, null, false)) }
                })
            )  /* end of return */
        }
    )
}






export const loginThunk = (data:DataType) => {
    debugger
    return (
        (dispatch:any) => {
            authenticationAPI.login(data).then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(authenticate());      /* we call authenticate to update Header !*/
                }
                else {
                    console.log(response.data.resultCode)
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptchaUrl())
                    }
                    dispatch(stopSubmit("login", { _error: response.data.messages[0] }))
                }
            })
        }
    )
}


export const getCaptchaUrl = () => {
    return (async (dispatch:any) => {
        let response = await authenticationAPI.getCaptchaUrl();
        let captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    })
}


export const logoutThunk = () => {
    return (
        (dispatch:any) => {
            authenticationAPI.logout().then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(authenticate());   /* we call authenticate to update Header !*/

                }
            })
        }
    )
}






export default authReducer;