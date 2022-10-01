import { authenticate } from "./Auth"
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"


let initialState = {
    initialized: false,
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return ({
                ...state,
                initialized: true,
            })


        default: return state
    }
}



export const initializedSuccess = () => { return ({ type: INITIALIZED_SUCCESS }) }


export const initializeApp = () => {
    return (
        (dispatch) => {
            let promise = dispatch(authenticate())  /* we have to dispatch this thunk, with dispatch method! */
            promise.then(() => { dispatch(initializedSuccess()) })
        }
    )
}



export default appReducer