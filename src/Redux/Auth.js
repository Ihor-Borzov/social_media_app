import { authenticationAPI } from "../api/api"

const SET_USERS_DATA = 'SET_USERS_DATA'



let initialState = {
id:null,
email:null,
login:null,
isAuth:false,
}



const authReducer =(state = initialState, action)=>{
    switch(action.type){
        case SET_USERS_DATA:
            state = {...state,
           ...action.data,
           isAuth:true,

            }
            default:
            return state
    }


}



export let authorizationAC=(id,email,login)=>{return({type:SET_USERS_DATA, data:{id,email,login}})}





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

export default authReducer;