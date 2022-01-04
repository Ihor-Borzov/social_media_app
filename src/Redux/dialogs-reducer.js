const UPDATE_USER_MESSAGE_INPUT = "UPDATE_USER_MESSAGE_INPUT"
const SEND_USER_MESSAGE = "SEND_USER_MESSAGE"



const dialogsReducer = (state, action)=>{

switch(action.type){
case UPDATE_USER_MESSAGE_INPUT:
        state.userInputMessage = action.newText
return state;

case SEND_USER_MESSAGE:
        state.messagesData.push({
            id:1,
            message:state.userInputMessage,
        });
        state.userInputMessage="";
return state;

default:return state;
    
}

}




export const updateUserMessageInputCreator =(text)=>{
    return{
        type:UPDATE_USER_MESSAGE_INPUT,
        newText:text
    }
}

export const sendUserMessageCreator = ()=>{
    return{
type:SEND_USER_MESSAGE,
    }
}



export default dialogsReducer;


/* HOW REDUCER WORKS:

in the component we create a function eventListener, when event happens we want to change our state! so we call props.dispatch(UpdateUserMessageCreator(text))..     remember you need UpdateUserMessageCreator been imported in the component you using it in, so component can execute that function (and that function is in dialogs-reducer.js) so that functionCreator returns an object a key {type:someType, newText:text}

the object falls in to method dispatch (which is in state.js file) this method expects to receive an object: action, then action goes in to each functionReducer (which should be imported in to state.js) so any reducer function required to receive needed peace of state and action object.

in the reducer function by method switch(action.type){case type1: code; return state;}we chose what case to execute, if we found a case we change our received object STATE and return it to state.js file to method dispatch and reassign it to needed peace of state, if we did not find proper switch case - we just default return received not changed STATE

then at the end of the function dispatch we call this._callSubscriber(this.state); to rerender entire webSite. 







*/