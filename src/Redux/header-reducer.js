const OPEN_CLOSE_HAMBURGER_MENU = "OPEN_CLOSE_HAMBURGER_MENU"



let initialState = {  
hamburgerMenu : false
}


const headerReducer = (state = initialState, action)=>{

switch(action.type){
    case OPEN_CLOSE_HAMBURGER_MENU : 
    return{...state,  hamburgerMenu : !state.hamburgerMenu }


    default: return state;

}
}




export const openCloseHamburgerMenuAC = () =>{
    return{type: OPEN_CLOSE_HAMBURGER_MENU}
}

















export default headerReducer;