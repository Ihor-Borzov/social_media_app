import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Nav_bar.module.css";




function Nav_bar (){
    return(
<div className={s.nav_bar}>
                                                               {/* this is the way to add active className */}
<div className={s.item}><NavLink to="/profile" className= { navData => navData.isActive ? s.active : s.item } >Profile</NavLink></div>    {/* this is the way I create the links here, and they automatically link to the links  */}
  <div className={`${s.item} ${s.another}`}><NavLink to='/dialogs' className= { navData => navData.isActive ? s.active : s.item } >Messages</NavLink></div>  {/* // this is the way to use two classNames */}
  <div className={s.item}><NavLink to ="/news" className= { navData => navData.isActive ? s.active : s.item } >News</NavLink></div>                              {/* we changed tag <a> to tag <NavLink> and attribute href to attribute "to" this is the way we make truly one page app, we reload only neadet part instead of a whall page */}
  <div className={s.item}><NavLink to = "/music" className= { navData => navData.isActive ? s.active : s.item } >Music</NavLink></div>
  <div className={s.item}><NavLink to = "/settings" className= { navData => navData.isActive ? s.active : s.item } >Settings</NavLink></div>



</div>
    )
}

export default Nav_bar;