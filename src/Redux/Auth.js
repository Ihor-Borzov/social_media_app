import { authenticationAPI } from "../api/api"

const SET_USERS_DATA = 'SET_USERS_DATA'
const LOGIN_USER = 'LOGIN_USER'



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
           isAuth:true,
            }

            case LOGIN_USER:
                state={...state,
                ...action.data,
                isAuth:true,}

            default:
            return state
    }

}




export let authorizationAC=(id,email,login)=>{return({type:SET_USERS_DATA, data:{id,email,login}})}

export let loginAC=(data)=>{return({type:LOGIN_USER, data})}




/* thunk */

export const authenticate = ()=>{
    return(
        (dispatch)=>{
            authenticationAPI.authenticate().then((response)=>{
                if(response.resultCode===0){
                    let {id, email, login} = response.data;
                  dispatch(authorizationAC(id,email,login))
                }
            })
        }
    )
}






export const loginThunk =(data)=>{
    return(
        (dispatch)=>{
            authenticationAPI.login(data).then((response)=>{
                if (response.data.resultCode===0){
                    dispatch(loginAC(data))
                    
                    }
            })
        }
    )
}






export default authReducer;