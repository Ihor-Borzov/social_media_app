import React from "react";
import { Link } from "react-router-dom";
import s from './../Dialogs.module.css'


function Message (props){
    return(
<div className={s.message}>{props.message}</div>
    )

}



export default Message;