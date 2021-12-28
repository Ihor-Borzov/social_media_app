const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_NEW_POST = "ADD_NEW_POST"
const UPDATE_USER_MESSAGE_INPUT = "UPDATE_USER_MESSAGE_INPUT"
const SEND_USER_MESSAGE = "SEND_USER_MESSAGE"




let store = {

 _state : {                       
        dialogsPage: {
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
                { id: 1, message: "koorva mach ego" },
                { id: 1, message: "Hi how are you?" },
            ],
    
            userInputMessage:""
        },
    
        myPostsPage: {
            postsData: [
                { likes: "10", message: "some message" },
                { likes: "12", message: "momolongmo" },
                { likes: "11", message: "some hurucasami" },
            ],
    
    newPostText:"",
    
        },
    
    
    navBarPage:{
    friendData:[
        {id:1, name:"Vector Sohunaishvily", picture:"https://www.illumination.com/wp-content/uploads/2019/11/DM1_Vector.png"},
        {id:2, name:"Felonious Gru", picture:"https://static.wikia.nocookie.net/heroes-and-villians/images/7/7e/Gru.png"},
        {id:3, name:"Dr Nefario", picture:"https://www.black-leatherjacket.com/image/cache/data/Dr-nefario-jacket/dr-nefario-jacket-900x900.jpg"},
        {id:4, name:"Marlena Gru", picture:"https://static.wikia.nocookie.net/heroes-and-villians/images/4/4c/Screenshot_2016-03-21-20-42-19-1.png"},
        {id:5, name:"Margo Gru ", picture:"https://static.wikia.nocookie.net/despicableme/images/0/02/Margo_Posing.png"},
        {id:6, name:"Mr. Perkins", picture:"https://s3.amazonaws.com/intanibase/iad_characters/966.jpg"},
    ]
    },
    },

/* methods what do not change state */
   _callSubscriber () {   /* this is my rerender function, underScore at the start of the word means, that this variable or method can use only his owner object */ 
    },

getState (){
    return this._state;
},

subscribe  (observer){
    this._callSubscriber = observer;
    },
/* /////////////////////////////////// */

  /* dispatch is collectible method what contains all the other methods. it receives an object "action" with main property "type:'name-of-function'"   */

dispatch(action){                
    if (action.type==="ADD_NEW_POST"){
        this._state.myPostsPage.postsData.push({
            likes:5,
            message:this._state.myPostsPage.newPostText,
        })
        this._state.myPostsPage.newPostText = "";
        this._callSubscriber(this._state);  
    }

else if (action.type==="UPDATE_NEW_POST_TEXT"){
    this._state.myPostsPage.newPostText = action.newText;
    this._callSubscriber(this._state);
}

/* ////////////////////////////////////////////////////////////////////MESSAGES PAGE */

else if (action.type==="UPDATE_USER_MESSAGE_INPUT"){
    this._state.dialogsPage.userInputMessage = action.newText
    this._callSubscriber(this._state);
}

else if (action.type==="SEND_USER_MESSAGE"){
    this._state.dialogsPage.messagesData.push({
        id:1,
        message:this._state.dialogsPage.userInputMessage,
    });
    this._state.dialogsPage.userInputMessage="";
           this._callSubscriber(this._state);
}


},/* END OF dispatch method */

}   /* END OF THE STORE */




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

/* MESSAGE PAGE */

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


export default store;






