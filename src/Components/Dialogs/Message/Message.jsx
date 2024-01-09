import React from "react";
import s from './Message.module.css'
import blankUserPicture from '../../../assets/images/user.jpg'


function Message(props) {


  return (

    <div className={s.wrapper}>
      {props.id === 0
        ? <div className={s.owner_text}>
          
          <div className={s.owner_avatar} >
        <img src={props.userProfile.photos.large != null ? props.userProfile.photos.large : blankUserPicture
} className={s.picture} alt="user avatar" />
</div>
          
          
           <span>{props.message}</span></div>





        : <div className={s.person_text} >


<div className={s.person_avatar} >
        <img src={props.thumbnail?props.thumbnail:blankUserPicture} className={s.picture} alt="user avatar" />
</div>
        
          <span>{props.message}</span>   
           </div>
     
     
     
     
     }
    </div>

  )

}



export default Message;



