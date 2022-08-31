import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Friend from './Friend/Friend';
import s from "./Nav_bar.module.css";




function Nav_bar(props) {
  let displayFriends = props.state.friendData.map((friendsObject) =>
   <Friend picture={friendsObject.picture} key={friendsObject.id} name={friendsObject.name} />)

let navClass = (navData)=>{ return (navData.isActive ? s.activeLink : s.notActiveLink)}

  return (
    <div className={s.nav_bar}>
      {/* this is the way to add active className */}
      <div className={s.item}><Link to={"/profile/" + props.authorizedId}
       className={navData => navData.isActive ? s.activeLink : s.notActiveLink} >Profile</Link></div>    {/* this is the way I create the links here, and they automatically link to the links  */}
     
      <div className={`${s.item} ${s.another}`}><Link to='/dialogs'
       className={navData => navData.isActive ? s.activeLink : s.notActiveLink} >Messages</Link></div>  {/* // this is the way to use two classNames */}
      
      <div className={s.item}><Link to="/news"
       className={navData => navData.isActive ? s.activeLink : s.notActiveLink} >News</Link></div>                              {/* we changed tag <a> to tag <Link> and attribute href to attribute "to" this is the way we make truly one page app, we reload only neadet part instead of a whall page */}
      
      <div className={s.item}><Link to="/music" 
      className={navData => navData.isActive ? s.activeLink : s.notActiveLink} >Music</Link></div>
      
      <div className={s.item}><Link to="/settings"
       className={navData => navData.isActive ? s.activeLink : s.notActiveLink} >Settings</Link></div>
      
      <div className={s.item}><Link to="/users" 
      className={navData => navData.isActive ? s.activeLink : s.notActiveLink} >Users</Link></div>

      <div className={s.BestFriends}>Best Friends</div>
      <div className={s.friends}>
        {displayFriends}
      </div>
    </div>
  )
}




let mapStoreToProps = (state) => {
  return {
    state: state.navBarPage,
    authorizedId: state.auth.id
  }
}


let mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Nav_bar);





