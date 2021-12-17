import React from "react";
import { Link } from "react-router-dom";
import s from './DialogItems.module.css'   

function DialogItems (props){
    let myCurrentPath = "/dialogs/"+ props.id       /* before return I can use regular javascript, and only in hte return i have to use JSX */
return(

    <div className={s.friend}>
     <Link to ={myCurrentPath}><div className={s.circle}><img src={props.picture}/></div></Link>
    <span className={s.friends_name}>{props.name}</span>
</div>







)
}


{/* <div>
    <Link to ={myCurrentPath}>{props.name}</Link>
    </div> */}


export default DialogItems;