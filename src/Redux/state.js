import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


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
    
    this._state.dialogsPage = dialogsReducer( this._state.dialogsPage,action);    /* import reducer, send him needed part of state and received action, and reducer will return new state, which will be automatically assigned to our main state */
this._state.myPostsPage = profileReducer(this._state.myPostsPage, action);

    this._callSubscriber(this._state);    /* at the end of dispatch we rerender the website */


},/* END OF dispatch method */

}   /* END OF THE STORE */



export default store;






