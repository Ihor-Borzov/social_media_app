import { Dispatch } from "redux"
import { usersAPI } from "../api/users-api"
import { AppStateType, InferActionsTypes } from "./redux-store"
import { ThunkAction } from "redux-thunk"


type Photos = {
    small: null | string,
    large: null | string
}

export type UserType = {
    name: null | string,
    id: number,
    uniqueUrlName: null | string,
    status: null | string,
    followed: boolean
    photos: Photos
}


let initialState = {
    users: [ ] as Array<UserType>,

    pageSize: 5,
    portionSize: 5,
    totalUsersCount: 26,
    currentPage: 1,
    isFetching: false,
    following_unfollowingIds: [] as Array<number>,
    term:"",
    isFriend:null as null | boolean
}



type InitialStateType = typeof initialState


const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {

        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    else { return u }
                })
            }


        case "UNFOLLOW" :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    else { return u }
                })
            }


        case "SET_USERS":
            return {
                ...state, users: action.users   /* each time we rewrite and reassign users */
            }


        case "SET_CURRENT_PAGE" :
            return {
                ...state,
                currentPage: action.page,
            }


        case "SET_TOTAL_USER_COUNT":
            return {
                ...state,
                totalUsersCount: action.newTotalUsersCount,
            }


        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching,
            }


        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                following_unfollowingIds: action.check
                    ? [...state.following_unfollowingIds, action.id]        /* if fallowing is processing add received userID */
                    : state.following_unfollowingIds.filter((ids) => { return (ids !== action.id) })  /* if fallowing is finished remove received userID.   we do not have to do destructurisation over her, because method filter will return a new array */
            }

            case "SET_IS_FRIEND":
                return{
                    ...state,
                    isFriend:action.isFriend,
                    currentPage:1
                }

                case "SET_TERM":
                    return{
                        ...state,
                        term:action.term,
                        currentPage:1
                    }


        default: return state;
    }

}



type ActionTypes = InferActionsTypes<typeof actions>

export let actions = {

    
setIsFriendAC : (isFriend:boolean) => {
    return{
        type:"SET_IS_FRIEND",
        isFriend
    } as const
    },
    
    
    
     setTermAC : (term:string)=>{
        return{type:"SET_TERM",
            term
        } as const
    },
    
    
    
    
    followSuccess : (userId: number) => {
        return {
            type: "FOLLOW",
            userId
        } as const
    },
    
    
    
    
    unfollowSuccess : (userId: number) => {
        return {
            type: "UNFOLLOW",
            userId
        } as const
    },
    
    
    
    
    setUsers : (users: Array<UserType>) => {
        return {
            type: "SET_USERS",
             users
        } as const
    },
    
    
    
    
    
   setCurrentPage: (page: number) => {
        return {
            type: "SET_CURRENT_PAGE",
             page
        } as const
    },
    
    
    
    
    setTotalUsersCount: (newTotalUsersCount: number) => {
        return {
            type: "SET_TOTAL_USER_COUNT",
             newTotalUsersCount
        } as const
    },
    
    
    
    toggleIsFetching : (isFetching: boolean) => {
        return (
            { type: "TOGGLE_IS_FETCHING",
                 isFetching 
                } as const
        )
    },
    
    
    

    
    toggleIsFollowingProgress : (check: boolean, id: number) => {
        return (
            { type: "TOGGLE_IS_FOLLOWING_PROGRESS",
                 check,
                  id 
                } as const
        )
    }

}






type GetStateType = ()=> AppStateType  // we described that GetStateType is a function which will return AppStateType
type DispatchType = Dispatch<ActionTypes>   // we import dispatch type from Redux. Dispatch can dispatch any of those action types
type ThunkType = ThunkAction <Promise<void>, AppStateType, unknown, ActionTypes>    // instead of typing all of that we may just specify a type

export const getUsers = (currentPage: number, pageSize: number, isFriend:null|boolean, term:null|string) => {
    return (
        (dispatch:DispatchType, getState:GetStateType) => {
            dispatch(actions.toggleIsFetching(true))
            usersAPI.getUsers(currentPage, pageSize, isFriend, term)
                .then(dataResponse => {
                    dispatch(actions.toggleIsFetching(false))
                    dispatch(actions.setUsers(dataResponse.items))
                    dispatch(actions.setTotalUsersCount(dataResponse.totalCount))
                })
        }
    )
}



// to be able to type this way you have to return async function, because only async function returns Promise
export const follow = (userId: number):ThunkAction <Promise<void>, AppStateType, unknown, ActionTypes> => {
    return (
    async  (dispatch, getState) => {
            dispatch(actions.toggleIsFollowingProgress(true, userId))
           let resultCode = await usersAPI.follow(userId)
                if (resultCode === 0) { dispatch(actions.followSuccess(userId)) }
                dispatch(actions.toggleIsFollowingProgress(false, userId))
            
        }
    )
}





export const unfollow = (userId: number):ThunkType => {
    return (
        async (dispatch: any) => {
            dispatch(actions.toggleIsFollowingProgress(true, userId));
           let resultCode = await usersAPI.unfollow(userId)
                if (resultCode === 0) { dispatch(actions.unfollowSuccess(userId)) }
                dispatch(actions.toggleIsFollowingProgress(false, userId))
            
        }
    )
}






export default usersReducer;




