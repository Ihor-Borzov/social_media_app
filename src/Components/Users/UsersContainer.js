import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleIsFollowingProgress, getUsers } from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../../api/api";
import { getCurrentPage, getFollow_unfollowUserIds, getIsFetching, getPageSize, getUsersCount, getUsersSelect, getUsersSuperReselector } from "../../Redux/user-selector";




class UsersContainerComponent extends React.Component {      
    /* since we do not make a request from the constructor, and constructor only sends props to his parent constructor at React.Component, we may not write our constructor - it will do its work automatically   */
    
    componentDidMount(){
this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    
    setCurrentPage=(page)=>{
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize);
    }
    
    render = ()=>{
    
        return(
<>
{this.props.isFetching ? <Preloader/>:null}    {/* this is the way to uply Preloader while the request is performing */}

    <Users
    setCurrentPage={this.setCurrentPage}
    totalUsersCount={this.props.totalUsersCount}
    pageSize={this.props.pageSize}
    portionSize={this.props.portionSize}
    users={this.props.users}
    currentPage={this.props.currentPage}
    follow = {this.props.follow}
    unfollow = {this.props.unfollow}
    toggleIsFollowingProgress = {this.props.toggleIsFollowingProgress}
    following_unfollowingIds = {this.props.following_unfollowingIds}
    />

</>
    )
    }
    
    }



let mapStateToProps =(state)=>{
    return{
users:getUsersSuperReselector(state),
pageSize:getPageSize(state),
totalUsersCount:getUsersCount(state),
currentPage:getCurrentPage(state),
isFetching:getIsFetching(state),
following_unfollowingIds:getFollow_unfollowUserIds(state),
portionSize : state.usersPage.portionSize
    }
}







export default connect(mapStateToProps, { 
    getUsers,
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress,}
    )(UsersContainerComponent);