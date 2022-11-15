import React from 'react';
import Paginator from './Paginator';
import User from './User';
import style from "./Users.module.css";


let Users = (props) => {
    let totalPagesCount = Math.ceil(props.totalUsersCount / props.pageSize);   /* here we calculate how many pages we will need, Math.ceil() rounds to the bigger integer  */

    let pagesArray = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pagesArray.push(i);
    }


    return (

        <div className={style.wrapper}>

            <Paginator totalUsersCount={props.totalUsersCount}
                portionSize={props.portionSize}
                pageSize={props.pageSize} setCurrentPage={props.setCurrentPage}
                currentPage={props.currentPage}
                isFetching={props.isFetching}
                getUsers = {props.getUsers}
                setIsFriendAC = {props.setIsFriendAC}
                setTermAC = {props.setTermAC}
                term={props.term}
                isFriend={props.isFriend}
            />


            {props.users.map(u => {
                return (<User key={u.id} user={u}
                    following_unfollowingIds={props.following_unfollowingIds} unfollow={props.unfollow} follow={props.follow}
                />)
            })}

        </div>
    )
}


export default Users


// the specific button renders on the base of the property u.followed (aether it is follow or unfollow ) then when we press the button
// this particular user id gets in to followingInProgress array in state then sends server request to subscribe or unsubscribe. While server
// request is in progress we rerender our users - and we check each (follow/unfollow) button if it is in followingInProgress array -
//if it means that request is still in process and button gets disabled. When server request resolved it changes user property followed
// and removes user.id from the followingInProgress array - so the button changes to opposite and becomes enabled






/* my new Class component! */
/* 
#1 You create a class and you required to extend from React.Component

#2 the constructor function is invokes only first time when the component object is born, any rerendering do not invoke constructor
but invoke render() function. when you go to another component - this component object kills. and next time when you visit this 
component it will born again.

#3 by the default constructor has to pass props to the React.Component's constructor (if he does only that, then you do not have to 
    write constructor at all, it will happen automatically), but if you add some variables to the class object, or you want him
    to do something only once when he is born, you have to write constructor, as in this sample

#4 Each class requires to have render function, which requires to return jsx.

#5 each additional function you want to create you have to create like this:   
functionName = ()=>{}

*/