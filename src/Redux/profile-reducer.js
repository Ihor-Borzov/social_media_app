const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_NEW_POST = "ADD_NEW_POST"



/*#6 create an object to assign launch characteristics for the main state.  this is the way we set up our state when we first time start the app */
let initialState = {
    postsData: [
        { likes: "10", message: "some message" },
        { likes: "12", message: "momolongmo" },
        { likes: "11", message: "some hurucasami" },
    ],

newPostText:"",
}


const profileReducer =(state = initialState, action)=>{

switch(action.type){
case UPDATE_NEW_POST_TEXT:{
    let stateCopy = {...state};
    stateCopy.newPostText = action.newText;
return stateCopy;
}

case ADD_NEW_POST:
    let stateCopy = {...state};
    stateCopy.postsData = [...state.postsData];
    stateCopy.postsData.push({
            likes:5,
            message:state.newPostText,
        })
        stateCopy.newPostText = "";
return stateCopy;

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