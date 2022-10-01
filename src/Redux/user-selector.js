import { createSelector } from "reselect"

const getUsersSelect = (state) => {
    return (state.usersPage.users)
}

/* this is main reselector */
export const getUsersSuperReselector = createSelector(getUsersSelect, (users) => {
    console.log("reselector worked");
    return users
})







export const getPageSize = (state) => {
    return (state.usersPage.pageSize)
}

export const getUsersCount = (state) => {
    return (state.usersPage.totalUsersCount)
}

export const getCurrentPage = (state) => {
    return (state.usersPage.currentPage)
}

export const getIsFetching = (state) => {
    return (state.usersPage.isFetching)
}

export const getFollow_unfollowUserIds = (state) => {
    return (state.usersPage.following_unfollowingIds)
}