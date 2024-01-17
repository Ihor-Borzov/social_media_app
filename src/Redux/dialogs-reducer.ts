import { Dispatch } from 'redux';
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

type FriendDataType ={
    id:number
    name:string|null
    picture:string|null
    messagesData:Array<MessageData>|[]
}

let messageHistory = [

]




let initialState = {
    friendData: [
        { id: 1, name: "Vector Sohunaishvily", picture: "https://www.illumination.com/wp-content/uploads/2019/11/DM1_Vector.png",
        messagesData: [
            { id: 1, message: `hi, my name is Vector` },
            { id: 0, message: "how is it going?" },
            { id: 1, message: "Everything is ok, how are you?" },
            { id: 0, message: "All good" },
        ],
    },

        { id: 2, name: "Felonious Gru", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfM7fKWDRPcd5a92m8BckpfMOcYc16KYePA&usqp=CAU",
         messagesData: [
            { id: 1, message: `hi, my name is Gru` },
            { id: 0, message: "how is it going?" },
            { id: 1, message: "Everything is ok, how are you?" },
            { id: 0, message: "All good" },
        ] },

        { id: 4, name: "Marlena Gru", picture: "https://static.tvtropes.org/pmwiki/pub/images/marlena_gru.jpg",
        messagesData: [
            { id: 1, message: `hi, my name is Marlena` },
            { id: 0, message: "how is it going?" },
            { id: 1, message: "Everything is ok, how are you?" },
            { id: 0, message: "All good" },
        ] },

        { id: 5, name: "Margo Gru ", picture: "https://static.wikia.nocookie.net/despicableme/images/0/02/Margo_Posing.png",
        messagesData: [
            { id: 1, message: `hi, my name is Margo` },
            { id: 0, message: "how is it going?" },
            { id: 1, message: "Everything is ok, how are you?" },
            { id: 0, message: "All good" },
        ] },

        { id: 6, name: "Mr. Perkins", picture: "https://s3.amazonaws.com/intanibase/iad_characters/966.jpg",
        messagesData: [
            { id: 1, message: `hi, my name is Mr Perkins` },
            { id: 0, message: "how is it going?" },
            { id: 1, message: "Everything is ok, how are you?" },
            { id: 0, message: "All good" },
        ] },
    ] as Array<FriendDataType>,



    messagesData: [
        { id: 1, message: "hi" },
        { id: 0, message: "how is it going?" },
        { id: 1, message: "Everything is ok, how are you?" },
        { id: 0, message: "All good" },
    ]as Array<MessageData>,

    userInputMessage: "" as string|null
}


type InitialStateType = typeof initialState




const dialogsReducer = (state:InitialStateType = initialState, action:any):InitialStateType => {

    switch (action.type) {

        case SEND_USER_MESSAGE:
            return { ...state,
                friendData:state.friendData.map((friend)=>{
                if(friend.id ===action.id){
                    return {...friend, messagesData:[...friend.messagesData,{id:0,message:action.data}]}
                }
                else{return friend}
                })

                //messagesData: [...state.messagesData, { id: 0, message: action.data, }], userInputMessage: ""
            
            };    /* lesson#47.3 pay attention to use square brackets, when you creating an array  */

        default: return state;

    }

}


type SendUserMessageCreatorType = {
    type: typeof SEND_USER_MESSAGE
    data:string
    id:number
}


export const sendUserMessageCreator = (data:string, id:number):SendUserMessageCreatorType => {
    return {
        type: SEND_USER_MESSAGE,
        data,
        id
    }
}


type ActionTypes = SendUserMessageCreatorType


export const SendMessageThunk = (data:string, id:number) => {
    return (dispatch:any) => {
        dispatch(sendUserMessageCreator(data, id));
        dispatch(reset("dialogsForm"));  //thi is the way to clear input of a form after submission
    }
}


export default dialogsReducer;

