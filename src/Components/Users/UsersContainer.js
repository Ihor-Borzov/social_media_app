import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../../api/api";




class UsersContainerComponent extends React.Component {      
    /* since we do not make a request from the constructor, and constructor only sends props to his parent constructor at React.Component, we may not write our constructor - it will do its work automatically   */
    
    componentDidMount(){
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(dataResponse => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(dataResponse.items)
            this.props.setTotalUsersCount(dataResponse.totalCount/100);
        })
    }
    
    
    
    setCurrentPage=(page)=>{
    this.props.setCurrentPage(page);
    this.props.toggleIsFetching(true);

usersAPI.getUsers(page, this.props.pageSize)
    .then(dataResponse => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(dataResponse.items);   
    this.props.setTotalUsersCount(dataResponse.totalCount/100);     /* get total count from response and dispatch it to the state  */
    });
    
    }
    
    render = ()=>{
    
        return(
<>
{this.props.isFetching ? <Preloader/>:null}    {/* this is the way to uply Preloader while the request is performing */}

    <Users
    setCurrentPage={this.setCurrentPage}
    totalUsersCount={this.props.totalUsersCount}
    pageSize={this.props.pageSize}
    users={this.props.users}
    currentPage={this.props.currentPage}
    follow = {this.props.follow}
    unfollow = {this.props.unfollow}
    />

</>
    )
    }
    
    }



let mapStateToProps =(state)=>{
    return{
users: state.usersPage.users,
pageSize:state.usersPage.pageSize,
totalUsersCount:state.usersPage.totalUsersCount,
currentPage:state.usersPage.currentPage,
isFetching:state.usersPage.isFetching,
    }
}







export default connect(mapStateToProps, { 
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,}
    )(UsersContainerComponent);