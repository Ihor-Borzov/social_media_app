import React from "react";
import style from "./Users.module.css"


let Users = (props)=>{
    return(      
<div className={style.wrapper}>
    
{   props.users.map(u=>                                      /* so we start and finish our component with curly braces inside the main div wrapper  */

<div key={u.id} className={style.ussers_container}>          {/* first we have to give a key attribute to user wrapper (react requires) */}

<div className={style.usser_icon}>
<div className={style.wrapper__for_AspectRatio}>
   <div className={style.imgAspectRatio_wrapper}> 
       <div className={style.img_wrapper}>  
           <img src={u.photoUrl} alt="picture"/>
        </div>
    </div>
    <div className={style.button_wrapper}>  ....Subscribe.... 
    {u.followed
         ? <button onClick={()=>{props.unFollow(u.id)}}>   Unfollow  </button>
         : <button onClick={()=>{props.follow(u.id)}}>   follow  </button>
        }
     </div>
</div>
</div>

<div className={style.user_info}>
    <div className={style.name_and_status}>
        <div className={style.name}>{u.fullName}</div>
        <div className={style.status}>{u.status}</div>
    
    </div>
    <div className={style.country_and_city}>
        <div className={style.country}>{u.location.country}</div>
        <div className={style.city}>{u.location.city}</div>
    </div>
</div>

</div>

) }
</div>
    )
}


export default Users;