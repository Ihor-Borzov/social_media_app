import { usersAPI } from "../api/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const SET_TERM = "SET_TERM"
const SET_IS_FRIEND = "SET_IS_FRIEND"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"



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


const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    else { return u }
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    else { return u }
                })
            }


        case SET_USERS:
            return {
                ...state, users: action.users   /* each time we rewrite and reassign users */
            }


        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }


        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.newTotalUsersCount,
            }


        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }


        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                following_unfollowingIds: action.check
                    ? [...state.following_unfollowingIds, action.id]        /* if fallowing is processing add received userID */
                    : state.following_unfollowingIds.filter((ids) => { return (ids !== action.id) })  /* if fallowing is finished remove received userID.   we do not have to do destructurisation over her, because method filter will return a new array */
            }

            case SET_IS_FRIEND:
                return{
                    ...state,
                    isFriend:action.isFriend,
                    currentPage:1
                }

                case SET_TERM:
                    return{
                        ...state,
                        term:action.term,
                        currentPage:1
                    }


        default: return state;
    }

}



type SetIsFriend = {
    type:typeof SET_IS_FRIEND
    isFriend:boolean
}

export let setIsFriendAC = (isFriend:boolean):SetIsFriend => {
return{
    type:SET_IS_FRIEND,
    isFriend
}
}

type SetTerm = {
    type: typeof SET_TERM
    term:string
}

export let setTermAC = (term:string):SetTerm=>{
    return{type:SET_TERM,
        term
    }
}



type FollowSuccessType = {
    type: typeof FOLLOW
    userId: number
}

export let followSuccess = (userId: number): FollowSuccessType => {
    return {
        type: FOLLOW,
        userId
    }
}


type unfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}

export let unfollowSuccess = (userId: number): unfollowSuccessType => {
    return {
        type: UNFOLLOW,
        userId
    }
}


type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export let setUsers = (users: Array<UserType>):SetUsersType => {
    return {
        type: SET_USERS,
         users
    }
}



type setCurrentPageType = {
    type : typeof SET_CURRENT_PAGE
    page:number
}

export let setCurrentPage = (page: number):setCurrentPageType => {
    return {
        type: SET_CURRENT_PAGE,
         page
    }
}


type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USER_COUNT
    newTotalUsersCount: number
}

export let setTotalUsersCount = (newTotalUsersCount: number):setTotalUsersCountType => {
    return {
        type: SET_TOTAL_USER_COUNT,
         newTotalUsersCount
    }
}


type toggleIsFetchingType = {
    type : typeof TOGGLE_IS_FETCHING
    isFetching:boolean
}

export let toggleIsFetching = (isFetching: boolean):toggleIsFetchingType => {
    return (
        { type: TOGGLE_IS_FETCHING,
             isFetching 
            }
    )
}



type toggleIsFollowingProgressType = {
    type : typeof TOGGLE_IS_FOLLOWING_PROGRESS
    check:boolean
    id:number
}


export let toggleIsFollowingProgress = (check: boolean, id: number):toggleIsFollowingProgressType => {
    return (
        { type: TOGGLE_IS_FOLLOWING_PROGRESS,
             check,
              id 
            }
    )
}








export const getUsers = (currentPage: number, pageSize: number, isFriend:boolean, userName:string) => {
    return (
        (dispatch: any) => {
            dispatch(toggleIsFetching(true))
            usersAPI.getUsers(currentPage, pageSize, isFriend, userName)
                .then(dataResponse => {
                    dispatch(toggleIsFetching(false))
                    dispatch(setUsers(dataResponse.items))
                    dispatch(setTotalUsersCount(dataResponse.totalCount))
                })
        }
    )
}




export const follow = (userId: number) => {
    return (
        (dispatch: any) => {
            dispatch(toggleIsFollowingProgress(true, userId))
            usersAPI.follow(userId).then((resultCode) => {
                if (resultCode === 0) { dispatch(followSuccess(userId)) }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
        }
    )
}



export const unfollow = (userId: number) => {
    return (
        (dispatch: any) => {
            dispatch(toggleIsFollowingProgress(true, userId));
            usersAPI.unfollow(userId).then((resultCode) => {
                if (resultCode === 0) { dispatch(unfollowSuccess(userId)) }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
        }
    )
}






export default usersReducer;
