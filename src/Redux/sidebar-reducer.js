

let initialState = {  
    friendData:[
        {id:1, name:"Vector Sohunaishvily", picture:"https://www.illumination.com/wp-content/uploads/2019/11/DM1_Vector.png"},
        {id:2, name:"Felonious Gru", picture:"https://static.wikia.nocookie.net/heroes-and-villians/images/7/7e/Gru.png"},
        {id:3, name:"Dr Nefario", picture:"https://www.black-leatherjacket.com/image/cache/data/Dr-nefario-jacket/dr-nefario-jacket-900x900.jpg"},
        {id:4, name:"Marlena Gru", picture:"https://static.wikia.nocookie.net/heroes-and-villians/images/4/4c/Screenshot_2016-03-21-20-42-19-1.png"},
        {id:5, name:"Margo Gru ", picture:"https://static.wikia.nocookie.net/despicableme/images/0/02/Margo_Posing.png"},
        {id:6, name:"Mr. Perkins", picture:"https://s3.amazonaws.com/intanibase/iad_characters/966.jpg"},
    ]
}


const sidebarReducer = (state = initialState, action)=>{
    console.log(action.type);
return state;
}


export default sidebarReducer;