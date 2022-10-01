import React from "react";
import s from './Message.module.css'

function Message(props) {


  return (

    <div className={s.wrapper}>
      {props.id === 0
        ? <div className={s.your_text}>  {props.message}  </div>
        : <div className={s.person_text}>  {props.message}  </div>
      }
    </div>

  )

}



export default Message;

