import { profileAPI } from "../api/api";

const ADD_NEW_POST = "ADD_NEW_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const REMOVE_POST = "REMOVE_POST"



/*#6 create an object to assign launch characteristics for the main state.  this is the way we set up our state when we first time start the app */
let initialState = {
    postsData: [
        {id:0, likes: "10", message: "some message" },
        { id:1, likes: "12", message: "momolongmo" },
        {id:2, likes: "11", message: "some hurucasami" },
    ],


userProfile:null,
status:"",
}


const profileReducer =(state = initialState, action)=>{

switch(action.type){

case ADD_NEW_POST:
    return {...state,   postsData:[...state.postsData, { id:state.postsData.length, likes:5,message:action.text }]};
/*     stateCopy.postsData = [...state.postsData];
    stateCopy.postsData.push({
            likes:5,
            message:state.newPostText,
        })
        stateCopy.newPostText = "";
return stateCopy; */


case REMOVE_POST:
    return{
        ...state, postsData:state.postsData.filter(p=>p.id!=action.id)
    }

case SET_USER_PROFILE:
    return{...state, userProfile:action.userProfile}

    case SET_STATUS:
        return{
            ...state,
            status:action.status
        }

default: return state;
}
}





export const addNewPostCreator = (text)=>{
    return{
type:ADD_NEW_POST,
text
    }
}

export const removePost = (id)=>{
    return{
        type:REMOVE_POST,
        id
    }
}

export const setUserProfile = (userProfile)=>{
    return{type:SET_USER_PROFILE,
    userProfile}
}

export const setStatus = (status)=>{
    return{
        type:SET_STATUS,
        status
    }
}


 





/* thunk */

export const getUserProfile = (userId)=>{
    return(
        (dispatch)=>{
            profileAPI.getUserProfile(userId).then((data)=>{
                dispatch(setUserProfile(data))
            })
        }
    )
}


export const getStatus = (userId)=>{
    return(
        (dispatch)=>{
            profileAPI.getStatus(userId).then((response)=>{
                dispatch(setStatus(response.data));
            })
        }
    )
}


export const updateStatus = (status)=>{
return(
    (dispatch)=>{
        profileAPI.setStatus(status).then((response)=>{
if(response.data.resultCode===0){dispatch(setStatus(status))}
        })
    }
)
}


export default profileReducer;