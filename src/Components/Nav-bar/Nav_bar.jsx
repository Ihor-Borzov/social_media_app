import React from 'react';
import { Link } from 'react-router-dom';
import s from "./Nav_bar.module.css";




function Nav_bar (){
    return(
<div className={s.nav_bar}>
                                                               {/* this is the way to add active className */}
<div className={s.item}><Link to="/profile" className= { navData => navData.isActive ? s.activeLink : s.notActiveLink } >Profile</Link></div>    {/* this is the way I create the links here, and they automatically link to the links  */}
  <div className={`${s.item} ${s.another}`}><Link to='/dialogs' className= { navData => navData.isActive ? s.activeLink : s.notActiveLink } >Messages</Link></div>  {/* // this is the way to use two classNames */}
  <div className={s.item}><Link to ="/news" className= { navData => navData.isActive ? s.activeLink : s.notActiveLink } >News</Link></div>                              {/* we changed tag <a> to tag <Link> and attribute href to attribute "to" this is the way we make truly one page app, we reload only neadet part instead of a whall page */}
  <div className={s.item}><Link to = "/music" className= { navData => navData.isActive ? s.activeLink : s.notActiveLink } >Music</Link></div>
  <div className={s.item}><Link to = "/settings" className= { navData => navData.isActive ? s.activeLink : s.notActiveLink } >Settings</Link></div>



</div>
    )
}

export default Nav_bar;