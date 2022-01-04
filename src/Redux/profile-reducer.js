const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_NEW_POST = "ADD_NEW_POST"




const profileReducer =(state, action)=>{

switch(action.type){
case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
return state;

case ADD_NEW_POST:
       state.postsData.push({
            likes:5,
            message:state.newPostText,
        })
        state.newPostText = "";
return state;

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



export default profileReducer;