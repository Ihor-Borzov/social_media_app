import { Dispatch } from "redux"
import {UserType} from "./users-reducer"
import { AppStateType, InferActionsTypes } from "./redux-store"
import { ThunkAction } from "redux-thunk"
import { usersAPI } from "../api/api"



type FriendDataType ={
    id:number
    name:string|null
    picture:string|null
}


let initialState = {
bestFriends:[] as Array <UserType>,

    friendData: [
        { id: 1, name: "Vector Sohunaishvily", picture: "https://www.illumination.com/wp-content/uploads/2019/11/DM1_Vector.png" },
        { id: 2, name: "Felonious Gru", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfM7fKWDRPcd5a92m8BckpfMOcYc16KYePA&usqp=CAU" },
        { id: 4, name: "Marlena Gru", picture: "https://static.tvtropes.org/pmwiki/pub/images/marlena_gru.jpg" },
        { id: 5, name: "Margo Gru ", picture: "https://static.wikia.nocookie.net/despicableme/images/0/02/Margo_Posing.png" },
        { id: 6, name: "Mr. Perkins", picture: "https://s3.amazonaws.com/intanibase/iad_characters/966.jpg" },
    ] as Array<FriendDataType>
}



type InitialStateType = typeof initialState


const sidebarReducer = (state:InitialStateType = initialState, action:any):InitialStateType => {
switch(action.type){

        case "SET_BEST_FRIENDS":
        return {
                ...state, bestFriends: action.users   /* each time we rewrite and reassign users */

        }

   default: return state;
}}



type ActionTypes = InferActionsTypes<typeof actions>

export let actions = {

       setBestFriendsAC : (users: Array<UserType>) => {
        return {
            type: "SET_BEST_FRIENDS",
             users
        } as const
    },


}




type GetStateType = ()=> AppStateType  // we described that GetStateType is a function which will return AppStateType
type DispatchType = Dispatch<ActionTypes>   // we import dispatch type from Redux. Dispatch can dispatch any of those action types
type ThunkType = ThunkAction <Promise<void>, AppStateType, unknown, ActionTypes>    // instead of typing all of that we may just specify a type



export const getBestFriends = (currentPage: number, pageSize: number, isFriend:null|boolean, term:null|string) => {
    return (
        (dispatch:DispatchType, getState:GetStateType) => {
            //dispatch(actions.toggleIsFetching(true))
            usersAPI.getUsers(currentPage, pageSize, isFriend, term)
                .then(dataResponse => {
                    //dispatch(actions.toggleIsFetching(false))
                    dispatch(actions.setBestFriendsAC(dataResponse.items))
                    //dispatch(actions.setTotalUsersCount(dataResponse.totalCount))
                })
        }
    )
}



export default sidebarReducer;