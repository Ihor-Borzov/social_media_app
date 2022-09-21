import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from './DialogItems.module.css'   

function DialogItems (props){
    let myCurrentPath = "/dialogs/"+ props.id       /* before return I can use regular javascript, and only in hte return i have to use JSX */





    return(

    <div className={s.friend}>

<div  className={s.avatar} >
     <NavLink to ={myCurrentPath} >
            <img src={props.picture} className={s.picture} alt ="user avatar"/>
     </NavLink>
     </div>
   
    <div className={s.friends_name}>{props.name}</div>

</div>
)
}



export default DialogItems;