import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, toggleIsFetchingAC, unFollowAC } from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";




class UsersContainerComponent extends React.Component {      
    /* since we do not make a request from the constructor, and constructor only sends props to his parent constructor at React.Component, we may not write our constructor - it will do its work automatically   */
    
    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(receivedResponse => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(receivedResponse.data.items)})
    }
    
    
    
    setCurrentPage=(page)=>{
    this.props.setCurrentPage(page);
    this.props.toggleIsFetching(true);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)   /* here we are making request passing the page we just pressed, so rerender will happen already with the proper page, we do request in this function because componentDidMount invokes only once */
    .then(receivedResponse => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(receivedResponse.data.items);   
    this.props.setTotalUsersCount(receivedResponse.data.totalCount/100);     /* get total count from response and dispatch it to the state  */
    });
    
    }
    
    render = ()=>{
    
        return(
<>
{this.props.isFetching ? <Preloader/>:null}

    <Users
    setCurrentPage={this.setCurrentPage}
    totalUsersCount={this.props.totalUsersCount}
    pageSize={this.props.pageSize}
    users={this.props.users}
    currentPage={this.props.currentPage}
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



let mapDispatchToProps =(dispatch)=>{
    return{
        follow:(userId)=>{dispatch(followAC(userId))},
        unFollow:(userId)=>{dispatch(unFollowAC(userId))},
        setUsers:(users)=>{dispatch(setUsersAC(users))},
        setCurrentPage:(page)=>{dispatch(setCurrentPageAC(page))},
        setTotalUsersCount:(newTotalUsersCount)=>{dispatch(setTotalUserCountAC(newTotalUsersCount))},
        toggleIsFetching:(isFetching)=>{dispatch(toggleIsFetchingAC(isFetching))},
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);