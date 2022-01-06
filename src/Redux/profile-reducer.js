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



/*#7  specify what will happen when we did not receive a state in to a reducer.
 first time when we launch the app - app invokes method dispatch (to gather all data) before even render a website which executes his reducers one by one, those reducers receive strange action object but do not receive state object, and when no cases matched returns default object what reducer received (which is undefined in this case). so to prevent that we will specify with initialState what object he will receive by default if no state received in to a reducer.
This way we fill and setup starting data and characteristics for the state! (if you will look at our old hand-made state - when dispatch method returns after execution he returns a peace of state which he assigns to the main state) */

const profileReducer =(state = initialState, action)=>{

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