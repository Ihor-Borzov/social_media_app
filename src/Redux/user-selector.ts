import { createSelector } from "reselect"
import { AppStateType } from "./redux-store";

const getUsersSelect = (state:AppStateType) => {
    return (state.usersPage.users)
}

/* this is main reselector */
export const getUsersSuperReselector = createSelector(getUsersSelect, (users) => {
    console.log("reselector worked");
    return users
})







export const getPageSize = (state:AppStateType) => {
    return (state.usersPage.pageSize)
}

export const getUsersCount = (state:AppStateType) => {
    return (state.usersPage.totalUsersCount)
}

export const getCurrentPage = (state:AppStateType) => {
    return (state.usersPage.currentPage)
}

export const getIsFetching = (state:AppStateType) => {
    return (state.usersPage.isFetching)
}

export const getFollow_unfollowUserIds = (state:AppStateType) => {
    return (state.usersPage.following_unfollowingIds)
}