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
    
            userInputMessage:"Message"
        },
    
        myPostsPage: {
            postsData: [
                { likes: "10", message: "some message" },
                { likes: "12", message: "momolongmo" },
                { likes: "11", message: "some hurucasami" },
            ],
    
    newPostText:"kabzda kak prosto",
    
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

   _callSubscriber () {   /* this is my rerender function, underScore at the start of the word means, that this variable or method can use only his owner object */ 
    },

getState (){
    return this._state;
},


  /* //////////////////PROFILE PAGE */

addRealPost (){
    this._state.myPostsPage.postsData.push({
        likes:5,
        message:this._state.myPostsPage.newPostText,
    })
    this._state.myPostsPage.newPostText = "";
    this._callSubscriber(this._state);
    },


 updateNewPostText (text){
        this._state.myPostsPage.newPostText = text
        this._callSubscriber(this._state);
        },

/* ////////////////////////*/
/* //////////////////MESSAGES PAGE */

 updateUserMessage  (text){
    this._state.dialogsPage.userInputMessage = text
    this._callSubscriber(this._state);
    },


 sendUserMessage  (){
        this._state.dialogsPage.messagesData.push({
            id:1,
            message:this._state.dialogsPage.userInputMessage,
        });
        this._state.dialogsPage.userInputMessage="";
               this._callSubscriber(this._state);
               }, 
/* /////////////////////////*/


 subscribe  (observer){
    this._callSubscriber = observer;
    }


}   /* END OF THE STORE */





export default store;