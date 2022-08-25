import { stopSubmit } from "redux-form"
import { authenticationAPI } from "../api/api"

const SET_USERS_DATA = 'SET_USERS_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'Auth/GET_CAPTCHA_URL_SUCCESS'



let initialState = {
    id: null,
    login: null,
    email: null,
    password: null,
    rememberMe: false,
    isAuth: false,
    captchaUrl: null,
}



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            state = {
                ...state,
                ...action.data,
            }
            /* falls through */  

        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
            /* falls through */

        default: return state
    }

}


//   "falls through "  this is just the way to fix warnings about the break in switch case



export let authorizationAC = (id, email, login, isAuth) => { return ({ type: SET_USERS_DATA, data: { id, email, login, isAuth } }) }
export let getCaptchaUrlSuccess = (captchaUrl) => { return ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } }) }






/* thunk */

export const authenticate = () => {
    return (
        (dispatch) => {
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






export const loginThunk = (data) => {
    return (
        (dispatch) => {
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
    return (async (dispatch) => {
        let response = await authenticationAPI.getCaptchaUrl();
        let captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    })
}


export const logoutThunk = () => {
    return (
        (dispatch) => {
            authenticationAPI.logout().then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(authenticate())   /* we call authenticate to update Header !*/
                }
            })
        }
    )
}






export default authReducer;