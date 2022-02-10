import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unFollowAC } from "../../Redux/users-reducer";
import Users from "./Users";







let mapStateToProps =(state)=>{
    return{
users: state.usersPage.users,
pageSize:state.usersPage.pageSize,
totalUsersCount:state.usersPage.totalUsersCount,
currentPage:state.usersPage.currentPage,
    }
}



let mapDispatchToProps =(dispatch)=>{
    return{
        follow:(userId)=>{dispatch(followAC(userId))},
        unFollow:(userId)=>{dispatch(unFollowAC(userId))},
        setUsers:(users)=>{dispatch(setUsersAC(users))},
        setCurrentPage:(page)=>{dispatch(setCurrentPageAC(page))},
        setTotalUsersCount:(newTotalUsersCount)=>{dispatch(setTotalUserCountAC(newTotalUsersCount))} 
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Users);