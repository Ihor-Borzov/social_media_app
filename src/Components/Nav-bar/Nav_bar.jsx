import React from 'react';
import s from "./Nav_bar.module.css";




function Nav_bar (){
    return(
<div className={s.nav_bar}>

<div className={s.item}><a href="/profile">Profile</a></div>    {/* this is the way I create the links here, and they automatically link to the links  */}
  <div className={`${s.item} ${s.active}`}><a href='/dialogs'>Messages</a></div>  {/* // this is the way to use two classNames */}
  <div className={s.item}><a>News</a></div>
  <div className={s.item}><a>Music</a></div>
  <div className={s.item}><a>Settings</a></div>



</div>
    )
}

export default Nav_bar;