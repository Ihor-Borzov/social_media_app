import React from "react";
import { Link } from "react-router-dom";
import s from './Message.module.css' 

function Message (props){
    return(

  <div>  

<div className={s.your_text}>{props.message}</div>
<div className={s.person_text}>{props.message}</div>

</div>

    )

}



export default Message;