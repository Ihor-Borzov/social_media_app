import React from "react";
import { Link } from "react-router-dom";
import s from './../Dialogs.module.css'

function DialogItems (props){
    let myCurrentPath = "/dialogs/"+ props.id       /* before return I can use regular javascript, and only in hte return i have to use JSX */
return(
<div>
    <Link to ={myCurrentPath}>{props.name}</Link>
    </div>
)
}


export default DialogItems;