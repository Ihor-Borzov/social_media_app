import React from "react";
import { connect } from "react-redux";
import { getCurrentPage, getFollow_unfollowUserIds, getIsFetching, getPageSize, getUsersCount, getUsersSuperReselector } from "../../Redux/user-selector";
import { actions, follow, getUsers, unfollow } from "../../Redux/users-reducer";
import Users from "./Users";
import { AppStateType } from "../../Redux/redux-store";



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




type MapStatePropsType = {
    currentPage:number,
    pageSize:number,
    term:string,
    totalUsersCount:number,
    portionSize:number,
    users: Array<UserType>,
    following_unfollowingIds:Array<number>,
    isFetching:boolean,
    isFriend:null|boolean,
    isAuth:boolean,
}


type MapDispatchPropsType = {
    getUsers:(currentPage:number, pageSize:number, isFriend:null|boolean, term: null|string)=>void,
    follow:(userID:number)=>void,
    unfollow:(userID:number)=>void,
    setUsers:(users: Array<UserType>)=>void                                              
    setCurrentPage:(page:number)=>void,
    setTotalUsersCount:(newTotalUsersCount: number)=>void                                              
    toggleIsFetching:(isFetching: boolean)=>void                                              
    toggleIsFollowingProgress?:(check:boolean, id:number)=>void,
    setIsFriendAC:(friend:boolean)=>void, 
    setTermAC:(term:string)=>void,
}


type OwnPropsType = {
    pageTitle:string,

}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType





class UsersContainerComponent extends React.Component <PropsType>{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.isFriend, this.props.term);
    }
 
     componentDidUpdate(prevProps:any, prevState:any, snapshot:any){
     if (this.props.term !== prevProps.term || this.props.isFriend !== prevProps.isFriend){
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.isFriend, this.props.term);
     }
    }  

    setCurrentPage = (page:number) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize, this.props.isFriend, this.props.term);
    }

    render () {

        return (
            <>
            <h2>{this.props.pageTitle}</h2>
                <Users
                    getUsers ={this.props.getUsers}
                    setCurrentPage={this.setCurrentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    portionSize={this.props.portionSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    following_unfollowingIds={this.props.following_unfollowingIds}
                    isFetching={this.props.isFetching}
                    setIsFriendAC = {this.props.setIsFriendAC}
                    setTermAC={this.props.setTermAC}
                    term={this.props.term}
                    isFriend={this.props.isFriend}
                    isAuth={this.props.isAuth}
                />

            </>
        )
    }

}



let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: getUsersSuperReselector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        following_unfollowingIds: getFollow_unfollowUserIds(state),
        portionSize: state.usersPage.portionSize,
        isFriend:state.usersPage.isFriend,
        term:state.usersPage.term,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch:any):MapDispatchPropsType =>{
    return{
        getUsers: (currentPage:number, pageSize:number, isFriend:null | boolean, term:null|string ) => { dispatch(getUsers(currentPage, pageSize, isFriend, term )); },
        follow: (userID:number) => { dispatch(follow(userID))},
        unfollow: (userID:number) => { dispatch(unfollow(userID))},
        setUsers: (users: Array<UserType>) => { dispatch(actions.setUsers(users))},
        setCurrentPage: (page:number) => { dispatch(actions.setCurrentPage(page))},
        setTotalUsersCount: (newTotalUsersCount: number) => { dispatch(actions.setTotalUsersCount(newTotalUsersCount))},
        toggleIsFetching: (isFetching: boolean) => { dispatch(actions.toggleIsFetching(isFetching))},
        toggleIsFollowingProgress: (check:boolean, id:number) => { dispatch(actions.toggleIsFollowingProgress(check, id))},
        setIsFriendAC: (friend:boolean) => { dispatch(actions.setIsFriendAC(friend))},
        setTermAC: (term:string) => { dispatch(actions.setTermAC(term))}
    }
}





export default connect <MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps, mapDispatchToProps)(UsersContainerComponent);



 