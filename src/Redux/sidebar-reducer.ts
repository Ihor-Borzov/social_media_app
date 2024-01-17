import { Dispatch } from "redux"
import {UserType} from "./users-reducer"
import { AppStateType, InferActionsTypes } from "./redux-store"
import { ThunkAction } from "redux-thunk"
import { usersAPI } from "../api/api"






let initialState = {
bestFriends:[] as Array <UserType>,
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
            usersAPI.getUsers(currentPage, pageSize, isFriend, term)
                .then(dataResponse => {
                    dispatch(actions.setBestFriendsAC(dataResponse.items))
                })
        }
    )
}



export default sidebarReducer;