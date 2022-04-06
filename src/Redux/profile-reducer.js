import { profileAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_NEW_POST = "ADD_NEW_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"



/*#6 create an object to assign launch characteristics for the main state.  this is the way we set up our state when we first time start the app */
let initialState = {
    postsData: [
        { likes: "10", message: "some message" },
        { likes: "12", message: "momolongmo" },
        { likes: "11", message: "some hurucasami" },
    ],

newPostText:"",
userProfile:null,
status:"",
}


const profileReducer =(state = initialState, action)=>{

switch(action.type){
case UPDATE_NEW_POST_TEXT:
    return {...state, newPostText:action.newText };
 /*    stateCopy.newPostText = action.newText;
return stateCopy; */


case ADD_NEW_POST:
    return {...state,   postsData:[...state.postsData, {likes:5,message:state.newPostText }],  newPostText:""};
/*     stateCopy.postsData = [...state.postsData];
    stateCopy.postsData.push({
            likes:5,
            message:state.newPostText,
        })
        stateCopy.newPostText = "";
return stateCopy; */

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




export const updateNewPostTextCreator = (text)=>{
    return{
type:UPDATE_NEW_POST_TEXT,
newText:text
    }
}


export const addNewPostCreator = ()=>{
    return{
type:ADD_NEW_POST,
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