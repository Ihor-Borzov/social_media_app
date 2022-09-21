import React from 'react';
import { useState } from 'react';
import s from "./Header.module.css";




function Header (props){

    return(
<div className={s.header}>
<img src="https://i.pinimg.com/originals/9f/69/af/9f69af8062e69951f7527962f45e63d1.png"  alt="Web page icon"/>



<div className = {props.onOffBurgerMenu? s.header__burger_active : s.header__burger}  
  onClick={props.openCloseHamburgerMenuAC}> <span></span> </div> 


</div>
    )
}

export default Header;




