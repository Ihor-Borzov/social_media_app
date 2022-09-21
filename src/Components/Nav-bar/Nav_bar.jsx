import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import s from "./Nav_bar.module.css";
import {logoutThunk} from "../../Redux/Auth"



function Nav_bar(props) {
  let displayFriends = props.state.friendData.map((friendsObject) =>
   <Friend picture={friendsObject.picture} key={friendsObject.id} name={friendsObject.name} />)



  return (
    <div className={props.onOffBurgerMenu? s.nav_bar : s.noBar}>
      {/* this is the way to add active className */}
      <div className={s.item}><Link to={"/profile/" + props.authorizedId}
       className={navData => navData.isActive ? s.activeLink : s.notActiveLink} >Profile</Link></div>    {/* this is the way I create the links here, and they automatically link to the links  */}
     
      <div className={`${s.item} ${s.another}`}><Link to='/dialogs'
       className={navData => navData.isActive ? s.activeLink : s.notActiveLink} >Messages</Link></div>  {/* // this is the way to use two classNames */}

      <div className={s.item}><Link to="/users" 
      className={navData => navData.isActive ? s.activeLink : s.notActiveLink} >Users</Link></div>
      
      <div className={s.item}> <Link to="/settings"
      className={navData => navData.isActive ? s.activeLink : s.notActiveLink} >Settings</Link> </div>

<div className={s.item}>{
props.isAuth?  <div className={s.logOut} onClick={props.logoutThunk}> Logout </div> 
:<div className={s.logIn} ><NavLink to={'/login'}>Login</NavLink></div>}
</div>
      
    
<div className={s.MyFriends}>
      <div className={s.BestFriends}>Best Friends</div>
      <div className={s.friends}>
        {displayFriends}
      </div>
      </div>
    </div>
  )
}




let mapStoreToProps = (state) => {
  return {
    state: state.navBarPage,
    authorizedId: state.auth.id,
    isAuth: state.auth.isAuth,
        login: state.auth.login,
        onOffBurgerMenu: state.header.hamburgerMenu
  }
}


export default connect(mapStoreToProps, {logoutThunk})(Nav_bar);





