import { reset } from 'redux-form';

const SEND_USER_MESSAGE = "SEND_USER_MESSAGE"





type DialogsData = {
    id:number
    name:string
}

type MessageData = {
    id:number
    message:string
}




let initialState = {
    dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Ahmed" },
        { id: 3, name: "Pahsa" },
        { id: 4, name: "Olya" },
        { id: 5, name: "Vita" },
        { id: 6, name: "Maksym" },
    ]as Array<DialogsData>,

    messagesData: [
        { id: 1, message: "hi" },
        { id: 0, message: "koorva mach ego" },
        { id: 1, message: "Hi how are you?" },
        { id: 0, message: "Hi how are you?" },
    ]as Array<MessageData>,

    userInputMessage: "" as string|null
}


type InitialStateType = typeof initialState




const dialogsReducer = (state:InitialStateType = initialState, action:any):InitialStateType => {

    switch (action.type) {

        case SEND_USER_MESSAGE:
            return { ...state, messagesData: [...state.messagesData, { id: 0, message: action.data, }], userInputMessage: "" };    /* lesson#47.3 pay attention to use square brackets, when you creating an array  */

        default: return state;

    }

}





export const sendUserMessageCreator = (data:string) => {
    return {
        type: SEND_USER_MESSAGE,
        data
    }
}


export const SendMessageThunk = (data:string) => {
    return (dispatch:any) => {
        dispatch(sendUserMessageCreator(data));
        dispatch(reset("dialogsForm"));  //thi is the way to clear input of a form after submission
    }
}


export default dialogsReducer;
