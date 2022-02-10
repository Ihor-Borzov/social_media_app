const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"


let initialState = {
users:[
    { id:1,  photos:{small:null, large:"https://www.illumination.com/wp-content/uploads/2019/11/DM1_Vector.png"},   followed:false, name:"Vector Sohunaishvily", status:"I am the greatest theif of the world", location:{city:"Minsk", country:"Belarus"}},
    { id:2,  photos:{small:null, large:"https://static.wikia.nocookie.net/heroes-and-villians/images/7/7e/Gru.png"}, followed:true, name:"Felonious Gru", status:"I am a boss", location:{city:"Moscow", country:"Russia"}},
    { id:3,  photos:{small:null, large:"https://www.black-leatherjacket.com/image/cache/data/Dr-nefario-jacket/dr-nefario-jacket-900x900.jpg"}, followed:false, name:"Dr Nefario", status:"I am engaged in the development of the interaction of nuclear particles", location:{city:"Kyiv", country:"Ucraine"}},
    { id:4,  photos:{small:null, large:"https://static.wikia.nocookie.net/heroes-and-villians/images/4/4c/Screenshot_2016-03-21-20-42-19-1.png"}, followed:true, name:"Marlena Gru", status:"I am the mother of Felonious Gru", location:{city:"New-York", country:"United States"}},
    { id:5,  photos:{small:null, large:"https://static.wikia.nocookie.net/despicableme/images/0/02/Margo_Posing.png"}, followed:false, name:"Margo Gru ", status:"I am a boss", location:{city:"Vinnytsia", country:"Ucraine"}},
    { id:6,   photos:{small:null, large:"https://s3.amazonaws.com/intanibase/iad_characters/966.jpg"}, followed:true, name:"Mr. Perkins", status:"Loans, morgages and other banking services", location:{city:"Zacopane", country:"Poland"}},
],

pageSize:5,
totalUsersCount:26,
currentPage:3,
}



const usersReducer = (state = initialState, action)=>{

switch (action.type){

    case FOLLOW:
return{
...state,
users:state.users.map( u=>{
if (u.id===action.userId){
return {...u, followed:true}
}
else {return u}
})}


    case UNFOLLOW:
return{
...state,
users:state.users.map( u=>{
if (u.id===action.userId){
return {...u, followed:false}
}
else {return u}
})}


    case SET_USERS:
return{...state, users:action.users   /* each time we rewrite and reassign users */ 
}


    case SET_CURRENT_PAGE:
return{...state,
    currentPage:action.page,
}


    case SET_TOTAL_USER_COUNT:
return{...state,
    totalUsersCount:action.newTotalUsersCount,
}






     default: return state; 
}

}







export let followAC =(userId)=>{
    return{
        type:FOLLOW, userId               /* when you do not specify the value of a property, but property name matches the receiving parameter name - then that property takes value of that parameter   */
    }
}

export let unFollowAC = (userId)=>{
    return{
        type:UNFOLLOW, userId
    }
}

export let setUsersAC = (users)=>{
return {
    type:SET_USERS, users
}
}



export let setCurrentPageAC = (page)=>{
return {
    type:SET_CURRENT_PAGE, page
}
}


export let setTotalUserCountAC = (newTotalUsersCount)=>{
return {
    type:SET_TOTAL_USER_COUNT, newTotalUsersCount
}
}



export default usersReducer;










/* 
{ id:2,  photoUrl:"https://static.wikia.nocookie.net/heroes-and-villians/images/7/7e/Gru.png", followed:true, name:"Felonious Gru", status:"I am a boss", location:{city:"Moscow", country:"Russia"}},
{ id:3,  photoUrl:"https://www.black-leatherjacket.com/image/cache/data/Dr-nefario-jacket/dr-nefario-jacket-900x900.jpg", followed:false, name:"Dr Nefario", status:"I am engaged in the development of the interaction of nuclear particles", location:{city:"Kyiv", country:"Ucraine"}},
{ id:4,  photoUrl:"https://static.wikia.nocookie.net/heroes-and-villians/images/4/4c/Screenshot_2016-03-21-20-42-19-1.png", followed:true, name:"Marlena Gru", status:"I am the mother of Felonious Gru", location:{city:"New-York", country:"United States"}},
{ id:5,  photoUrl:"https://static.wikia.nocookie.net/despicableme/images/0/02/Margo_Posing.png", followed:false, name:"Margo Gru ", status:"I am a boss", location:{city:"Vinnytsia", country:"Ucraine"}},
{ id:6,  photoUrl:"https://s3.amazonaws.com/intanibase/iad_characters/966.jpg", followed:true, name:"Mr. Perkins", status:"Loans, morgages and other banking services", location:{city:"Zacopane", country:"Poland"}},
 */