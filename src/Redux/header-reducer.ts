const OPEN_CLOSE_HAMBURGER_MENU = "OPEN_CLOSE_HAMBURGER_MENU"
const CLOSE_HAMBURGER_MENU = "CLOSE_HAMBURGER_MENU"



let initialState = {
    hamburgerMenu: false
}

type InitialState = typeof initialState


const headerReducer = (state:InitialState = initialState, action:any):InitialState => {

    switch (action.type) {
        case OPEN_CLOSE_HAMBURGER_MENU:
            return { ...state, hamburgerMenu: !state.hamburgerMenu };

        case CLOSE_HAMBURGER_MENU:
            return { ...state, hamburgerMenu: false };


        default: return state;

    }
}




type OpenCloseHamburgerMenuAC = {
    type : typeof OPEN_CLOSE_HAMBURGER_MENU
}


export const openCloseHamburgerMenuAC = ():OpenCloseHamburgerMenuAC => {
    return { type: OPEN_CLOSE_HAMBURGER_MENU }
}


type CloseHamburgerMenuAC = {
    type : typeof CLOSE_HAMBURGER_MENU
    payload:boolean
}

export const closeHamburgerMenuAC = ():CloseHamburgerMenuAC => {
    return { type: CLOSE_HAMBURGER_MENU, payload: false }
}


export default headerReducer;