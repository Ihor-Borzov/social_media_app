import { reset } from 'redux-form';

const SEND_USER_MESSAGE = "SEND_USER_MESSAGE"




let initialState = {
    dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Ahmed" },
        { id: 3, name: "Pahsa" },
        { id: 4, name: "Olya" },
        { id: 5, name: "Vita" },
        { id: 6, name: "Maksym" },
    ],

    messagesData: [
        { id: 1, message: "hi" },
        { id: 0, message: "koorva mach ego" },
        { id: 1, message: "Hi how are you?" },
        { id: 0, message: "Hi how are you?" },
    ],

    userInputMessage: ""
}






/* lesson43.4 you have to change the reducers a little bit - instead of working with your native state
 you have to duplicate your native state and work and change in the reducers duplicated state, also return from
 your reducers should be that changed duplicated state. so connect will be able to compare those two states and if there is 
 any difference it will rerender the page where changes happened */

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_USER_MESSAGE:
            return { ...state, messagesData: [...state.messagesData, { id: 0, message: action.data, }], userInputMessage: "" };    /* lesson#47.3 pay attention to use square brackets, when you creating an array  */

        default: return state;

    }

}





export const sendUserMessageCreator = (data) => {
    return {
        type: SEND_USER_MESSAGE,
        data
    }
}


export const SendMessageThunk = (data) => {
    return (dispatch) => {
        dispatch(sendUserMessageCreator(data));
        dispatch(reset("dialogsForm"));
    }
}


export default dialogsReducer;


/* HOW REDUCER WORKS:

in the component we create a function eventListener, when event happens we want to change our state! so we call props.dispatch(UpdateUserMessageCreator(text))..     remember you need UpdateUserMessageCreator been imported in the component you using it in, so component can execute that function (and that function is in dialogs-reducer.js) so that functionCreator returns an object a key {type:someType, newText:text}

the object falls in to method dispatch (which is in state.js file) this method expects to receive an object: action, then action goes in to each functionReducer (which should be imported in to state.js) so any reducer function required to receive needed peace of state and action object.

in the reducer function by method switch(action.type){case type1: code; return state;}we chose what case to execute, if we found a case we change our received object STATE and return it to state.js file to method dispatch and reassign it to needed peace of state, if we did not find proper switch case - we just default return received not changed STATE

then at the end of the function dispatch we call this._callSubscriber(this.state); to rerender entire webSite. 







*/