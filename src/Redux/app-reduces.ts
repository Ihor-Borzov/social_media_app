import { authenticate } from "./Auth"
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"


type InitialStateStateType = {
    initialized: boolean
}

let initialState:InitialStateStateType = {
    initialized: false,
}


const appReducer = (state:InitialStateStateType = initialState, action:any):InitialStateStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return ({
                ...state,
                initialized: true,
            })


        default: return state
    }
}



type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = ():initializedSuccessActionType => { return ({ type: INITIALIZED_SUCCESS }) }


export const initializeApp = () => {
    return (
        (dispatch:any) => {
            let promise = dispatch(authenticate())  /* we have to dispatch this thunk, with dispatch method! */
            promise.then(() => { dispatch(initializedSuccess()) })
        }
    )
}



export default appReducer