import React from 'react';
import s from "./Friend.module.css";






function Friend(props){

    return(
        <div className={s.friend}>
        <div className={s.circle}><img src={props.picture}/></div>
        <span className={s.friends_name}>{props.name}</span>
    </div>
    )
}

export default Friend;