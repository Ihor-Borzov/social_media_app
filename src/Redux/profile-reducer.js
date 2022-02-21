const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_NEW_POST = "ADD_NEW_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"



/*#6 create an object to assign launch characteristics for the main state.  this is the way we set up our state when we first time start the app */
let initialState = {
    postsData: [
        { likes: "10", message: "some message" },
        { likes: "12", message: "momolongmo" },
        { likes: "11", message: "some hurucasami" },
    ],

newPostText:"",
userProfile:null,
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



export default profileReducer;