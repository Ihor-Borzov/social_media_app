import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import s from "./Nav_bar.module.css";
import { logoutThunk } from "../../Redux/Auth"
import { closeHamburgerMenuAC} from "../../Redux/header-reducer"
import { getBestFriends} from "../../Redux/sidebar-reducer"
import ihorBorzovPicture from "../../assets/images/Profile.png"



function Nav_bar(props) {

  let ref = useRef()
  useEffect(()=>{
    props.getBestFriends(1, 10, true, "");
  },[])
  

  let displayBestFriends = props.bestFriends.map((friendsObject) =>
    <Friend picture={friendsObject.photos} key={friendsObject.id} id={friendsObject.id} name={friendsObject.name} />)


  return (
    <div className={props.onOffBurgerMenu ? s.nav_bar : s.noBar}>
      {/* this is the way to add active className */}

      <div className={s.item}><Link to={"/profile/" + props.authorizedId}onClick={props.closeHamburgerMenuAC}
        className={s.link} ref = {ref}>Profile</Link></div>    {/* this is the way I create the links here, and they automatically link to the links  */}

      <div className={`${s.item} ${s.another}`}><Link to='/dialogs' onClick={props.closeHamburgerMenuAC}
        className={s.link} >Messages</Link></div>  {/* // this is the way to use two classNames */}

      <div className={s.item}><Link to="/users" onClick={props.closeHamburgerMenuAC}
        className={s.link} >Users</Link></div>

      <div className={s.item}> <Link to="/settings" onClick={props.closeHamburgerMenuAC}
        className={s.link} >Settings</Link> </div>

      <div className={s.item}>
        {props.isAuth ?
          <div className={s.logOut} onClick={() => { props.logoutThunk(); props.closeHamburgerMenuAC() }}>
            {/* <NavLink to={'/login'}>Logout</NavLink> */}
            <NavLink to={'/profile/*'}>Logout</NavLink>
          </div>

          : <div className={s.logIn} onClick={props.closeHamburgerMenuAC} >
            <NavLink to={'/login'}>Login</NavLink>
          </div>}

      </div>


      <div className={s.MyFriends}>
        <div className={s.BestFriends}>Best Friends</div>
        <div className={s.friends}>

        <div className={s.friend}>
        <NavLink to={"/profile/" + 22624}>
            <div className={s.circle}><img src={ihorBorzovPicture} alt="Friend's avatar" /></div>
            </NavLink>
            <span className={s.friends_name}>{"Ihor Borzov"}</span>
        
        </div>

          {displayBestFriends}
        </div>
      </div>
    </div>
  )
}




let mapStateToProps = (state) => {
  return {
    bestFriends:state.navBarPage.bestFriends,
    state: state.navBarPage,
    authorizedId: state.auth.id,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    onOffBurgerMenu: state.header.hamburgerMenu,
  }
}


export default connect(mapStateToProps, { logoutThunk, closeHamburgerMenuAC, getBestFriends})(Nav_bar);





