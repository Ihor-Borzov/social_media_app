import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css";




function Header (props){
    return(
<div className={s.header}>
<img src="https://i.pinimg.com/originals/9f/69/af/9f69af8062e69951f7527962f45e63d1.png"/>

<div className={s.loginBlock}>
{
props.isAuth?   <div>  {props.login}   <button onClick={props.logoutThunk}>Logout</button> </div> 
:<NavLink to={'/login'}>Login</NavLink>}
</div>


</div>
    )
}

export default Header;