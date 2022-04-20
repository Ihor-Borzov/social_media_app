import { authenticationAPI } from "../api/api"

const SET_USERS_DATA = 'SET_USERS_DATA'



let initialState = {
id:null,
login:null,
email:null,
password:null,
rememberMe:false,
isAuth:false,
}



const authReducer =(state = initialState, action)=>{
    switch(action.type){
        case SET_USERS_DATA:
            state = {...state,
           ...action.data,
           
            }


            default:
            return state
    }

}




export let authorizationAC=(id,email,login, isAuth)=>{return({type:SET_USERS_DATA, data:{id,email,login, isAuth}})}






/* thunk */

export const authenticate = ()=>{
    return(
        (dispatch)=>{
            authenticationAPI.authenticate().then((response)=>{
                if(response.resultCode===0){
                    let {id, email, login} = response.data;
                  dispatch(authorizationAC(id,email,login,true))  /* if response code ===0 it means we entered and we can send our isAuth to true */
                }
                else {dispatch(authorizationAC(null,null,null,false))}
            })
        }
    )
}






export const loginThunk =(data)=>{
    return(
        (dispatch)=>{
            authenticationAPI.login(data).then((response)=>{
                if (response.data.resultCode===0){
                    dispatch(authenticate());      /* we call authenticate to update Header !*/
                    }
            })
        }
    )
}


export const logoutThunk = ()=>{
    return(
        (dispatch)=>{
            authenticationAPI.logout().then((response)=>{
                if (response.data.resultCode===0){
                    dispatch(authenticate())   /* we call authenticate to update Header !*/
                }
            })
        }
    )
}






export default authReducer;